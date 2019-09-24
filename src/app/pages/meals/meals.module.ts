import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import {FormsModule} from '@angular/forms';
import { MealsRoutingModule, routedComponents } from './meals-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
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
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbActionsModule,
    NbButtonModule,
    SharedModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    MealsRoutingModule,
    Ng2SmartTableModule,
    
  ],
  declarations: [
    ...routedComponents, 
  ],
})
export class MealsModule { }
