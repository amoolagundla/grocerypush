// 1. Angular Service: grocery-list.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GroceryListService {
  private groceryList: string[] = [];

  constructor() {
    this.loadList();
  }

  getList(): string[] {
    return this.groceryList;
  }

  addItem(item: string): void {
    this.groceryList.push(item);
    this.saveList();
    this.notifyItemAdded(item);
  }

  removeItem(index: number): void {
    this.notifyItemremoved(this.groceryList[index]);
    this.groceryList.splice(index, 1);
    this.saveList();
    
  }

  private saveList(): void {
    localStorage.setItem('groceryList', JSON.stringify(this.groceryList));
  }

  private loadList(): void {
    const savedList = localStorage.getItem('groceryList');
    if (savedList) {
      this.groceryList = JSON.parse(savedList);
    }
  }
  private notifyItemremoved(item: string): void {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      new Notification(`  item removed: ${item}`);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(`  item removed: ${item}`);
        }
      });
    }
  }
  private notifyItemAdded(item: string): void {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      new Notification(`New item added: ${item}`);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(`New item added: ${item}`);
        }
      });
    }
  }
}
