import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetsService, Pet } from '../../services/pets.service';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];
  allPets: Pet[] = []; 
  submitted: boolean = false;
  showForm = true;
  searchQuery: string = '';
  newPet: Pet = { name: '', type: '', breed: '', age: 0 };
  editingPet: Pet | null = null;

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.loadPets();
  }

  loadPets(): void {
    this.petsService.getPets().subscribe((data) => {
      this.allPets = data;
      this.applySearchFilter();
    });
  }

  applySearchFilter(): void {
    const query = this.searchQuery.toLowerCase().trim();
    if (query) {
      this.pets = this.allPets.filter(pet =>
        pet.name.toLowerCase().includes(query) ||
        pet.type.toLowerCase().includes(query) ||
        pet.breed.toLowerCase().includes(query)
      );
    } else {
      this.pets = [...this.allPets];
    }
  }

  savePet(): void {
    this.submitted = true;
  
    if (!this.newPet.name || !this.newPet.type || !this.newPet.breed) {
      return; 
    }
  
    if (this.editingPet) {
      this.petsService.updatePet(this.editingPet.id!, this.newPet).subscribe(() => {
        this.cancelEdit();
        this.loadPets();
      });
    } else {
      this.petsService.addPet(this.newPet).subscribe(() => {
        this.newPet = { name: '', type: '', breed: '', age: 0 };
        this.submitted = false;
        this.loadPets();
      });
    }
  }  

  editPet(pet: Pet): void {
    this.editingPet = pet;
    this.newPet = { ...pet };
  }

  cancelEdit(): void {
    this.editingPet = null;
    this.newPet = { name: '', type: '', breed: '', age: 0 };
  }

  deletePet(id: number): void {
    this.petsService.deletePet(id).subscribe(() => {
      this.loadPets();
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
