import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DishOneComponent } from './dish-one/dish-one.component';
import { DishTwoComponent } from './dish-two/dish-two.component';
import { DishThreeComponent } from './dish-three/dish-three.component';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [CommonModule, DishOneComponent, DishTwoComponent, DishThreeComponent],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

}
