// 2. Component for adding items: add-item.component.ts
import { Component } from '@angular/core'; 
import { Router } from '@angular/router';
import { GroceryListService } from '../services/GroceryListService';

@Component({
  selector: 'app-add-item',
  template: `
    <input [(ngModel)]="newItem" placeholder="Add a new item" />
    <button (click)="addItem()">Add to list</button>
  `,
})
export class AddItemComponent {
  newItem: string = '';

  // Inside AddItemComponent class
  constructor(private groceryListService: GroceryListService, private router: Router) { }

  addItem(): void {
    if (this.newItem) {
      this.groceryListService.addItem(this.newItem);
      this.newItem = ''; // Clear the input after adding an item
      this.router.navigate(['/list']); // Navigate to the list view
    }
  }

}
