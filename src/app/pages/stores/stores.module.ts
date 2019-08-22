import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { StoresRoutingModule, routedComponents } from './stores-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
  } from '@nebular/theme';


@NgModule({
  imports: [
    NbCardModule,
    ReactiveFormsModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    StoresRoutingModule,
    Ng2SmartTableModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    
  ],
  declarations: [
    ...routedComponents, 
  ],
})
export class StoresModule { }
