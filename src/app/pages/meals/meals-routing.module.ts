import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealsComponent } from './meals.component';
import {MealsListComponent } from './meals-list/meals-list.component';
import {MealsAddComponent} from './meals-add/meals-list.component';
 
const routes: Routes = [{
  path: '',
  component: MealsComponent,
  children: [
    {
      path: 'meals-list',
      component: MealsListComponent,
    },
    {
      path: 'meals-add',
      component: MealsAddComponent,
    } 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsRoutingModule { }

export const routedComponents = [
  MealsComponent,
  MealsListComponent,
  MealsAddComponent
   
];
