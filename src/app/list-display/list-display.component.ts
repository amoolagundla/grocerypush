// 3. Component for displaying the list: list-display.component.ts
import { Component } from '@angular/core'; 
import { GroceryListService } from '../services/GroceryListService';

@Component({
  selector: 'app-list-display',
  template: `
    <ul>
      <li *ngFor="let item of groceryList; let i = index">
        {{ item }}
        <button (click)="removeItem(i)">Remove</button>
      </li>
    </ul>
  `,
})
export class ListDisplayComponent {
  get groceryList(): string[] {
    return this.groceryListService.getList();
  }

  constructor(private groceryListService: GroceryListService) { }

  removeItem(index: number): void {
    this.groceryListService.removeItem(index);
  }
}
