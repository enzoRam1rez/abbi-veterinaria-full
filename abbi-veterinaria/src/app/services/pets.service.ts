import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pet {
  id?: number;
  name: string;
  type: string;
  breed: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private apiUrl = 'http://localhost:3000/api/pets';

  constructor(private http: HttpClient) {}

  getPets(filters: any = {}): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl, { params: filters });
  }

  addPet(pet: Pet): Observable<any> {
    return this.http.post(this.apiUrl, pet);
  }

  updatePet(id: number, pet: Pet): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pet);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
