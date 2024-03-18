import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
upxTitle:string = "Upx III";
home:string = "Home";
obj:string = "Objetivos";
data:string = "Dados";
group:string = "Grupo";
imgAlt:string = "placas solares"
}
