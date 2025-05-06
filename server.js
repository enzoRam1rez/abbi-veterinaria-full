const express = require('express');
const app = express();
const cors = require('cors'); 
const petsRoutes = require('./controllers/petsController');

app.use(cors()); 
app.use(express.json());
app.use('/api/pets', petsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`SV corriendo en http://localhost:${PORT}`);
});
