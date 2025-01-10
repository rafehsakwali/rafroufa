import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component'; // Assurez-vous que le chemin est correct

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignComponent } // Assurez-vous que cette ligne est présente
];