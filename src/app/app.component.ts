import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ObjectiveComponent} from "./objective/objective.component";
import {DataComponent} from "./data/data.component";
import {GroupComponent} from "./group/group.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ObjectiveComponent, DataComponent, GroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'upx3';
}
