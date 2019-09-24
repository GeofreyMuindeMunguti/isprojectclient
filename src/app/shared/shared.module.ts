import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
 
import { FileUploadService } from './file-upload/file-upload.service';
import { FileUploadComponent } from './file-upload/file-upload.component';
 

import { from } from 'rxjs';

@NgModule({
    declarations: [
        FileUploadComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
      
        
    ],
    providers: [
        FileUploadService,
       
         
    ],
    exports: [
        FileUploadComponent,
        
    ]
})

export class SharedModule { }