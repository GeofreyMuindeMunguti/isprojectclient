import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresComponent } from './stores.component';
import {StoresListComponent } from './stores-list/stores-list.component';
import {StoresAddComponent} from './stores-add/stores-add.component';
 
const routes: Routes = [{
  path: '',
  component: StoresComponent,
  children: [
    {
      path: 'stores-list',
      component: StoresListComponent,
    },
    {
      path: 'stores-add',
      component: StoresAddComponent,
    } 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresRoutingModule { }

export const routedComponents = [
  StoresComponent,
  StoresListComponent,
  StoresAddComponent
   
];
