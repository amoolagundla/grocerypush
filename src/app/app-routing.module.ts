import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ListDisplayComponent } from './list-display/list-display.component';

const routes: Routes = [
  { path: 'list', component: ListDisplayComponent },
  { path: 'add', component: AddItemComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
