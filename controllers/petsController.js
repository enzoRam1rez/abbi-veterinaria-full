const express = require('express');
const fs = require('fs');
const router = express.Router();

const dataFile = './pets.json'; 

router.get('/', (req, res) => {
    const pets = JSON.parse(fs.readFileSync(dataFile));
    const { type, breed, name } = req.query;

    let filtered = pets;

    if (type) filtered = filtered.filter(p => p.type === type);
    if (breed) filtered = filtered.filter(p => p.breed === breed);
    if (name) filtered = filtered.filter(p => p.name === name);

    res.json(filtered);
});

router.post('/', (req, res) => {
    const pets = JSON.parse(fs.readFileSync(dataFile));
    const newPet = req.body;

    if (!newPet.name || !newPet.type || !newPet.breed) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    newPet.id = pets.length ? pets[pets.length - 1].id + 1 : 1;
    pets.push(newPet);
    fs.writeFileSync(dataFile, JSON.stringify(pets, null, 2));

    res.status(201).json({
        message: 'Mascota agregada correctamente',
        data: newPet
      });
});

router.put('/:id', (req, res) => {
    const pets = JSON.parse(fs.readFileSync(dataFile));
    const id = parseInt(req.params.id);
    const index = pets.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).json({ error: 'Mascota no encontrada' });

    pets[index] = { ...pets[index], ...req.body };
    fs.writeFileSync(dataFile, JSON.stringify(pets, null, 2));

    res.json({
        message: 'Mascota actualizada correctamente',
        data: pets[index]
      });
      
});

router.delete('/:id', (req, res) => {
    let pets = JSON.parse(fs.readFileSync(dataFile));
    const id = parseInt(req.params.id);

    if (!pets.find(p => p.id === id)) return res.status(404).json({ error: 'Mascota no encontrada' });

    pets = pets.filter(p => p.id !== id);
    fs.writeFileSync(dataFile, JSON.stringify(pets, null, 2));

    res.json({ message: 'Mascota eliminada correctamente' });
});

module.exports = router;
