import { Component } from '@angular/core';
import { PetsComponent } from './components/pets/pets.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PetsComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abbi-veterinaria';
}
