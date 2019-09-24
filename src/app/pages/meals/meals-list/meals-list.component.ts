import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { HttpClient } from '@angular/common/http';
import {config} from '../../../config/dev';
 

@Component({
  selector: 'ngx-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss']
})
export class MealsListComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmEdit: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      
      carbohydrates: {
        title: 'Carbohydrates',
        type: 'string',
      },
      protein: {
        title: 'Proteins',
        type: 'string',
      },
      fat: {
        title: 'Fats',
        type: 'number',
      },
      
      
      calories: {
        title: 'Energy(Kcal)',
        type: 'number',
      },
      
    },
  };
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData, private http: HttpClient) {
    this.getData().subscribe(data =>{
      this.source.load(data);
      console.log(data)
      
      data.forEach(record => {
        console.log(config.resources+record.img_url)
        
      });
    } 
    );
    //console.log(custmdata)cmd

     
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }       
 onconfirmSave(event): void {
  if (window.confirm('Are you sure you want to delete?')) {
    event.confirm.resolve();
  } else {
    event.confirm.reject();
  }
  }

  getData(): any {
   // var fetched_data;
    return this.http.get(config.url+'/meals');
  }

}
