import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss']
})
export class MealsAddComponent  {

  name:String;
  carbohydrates:Number;
  protein:Number;
  sugar:Number;
  salt:Number;
  fat:Number;
  fibre:Number;
  grams:Number;
  in_grams:Number;
  store: String;

   angForm: FormGroup;
   constructor(private fb: FormBuilder, 
    private http:HttpClient,
     private router: Router
     ) {
    this.createForm();
    this.getStores();
  }
  powers:any;

   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       carbohydrates: ['', Validators.required ],
       protein : ['', Validators.required],
       sugar:['', Validators.required],
       salt:['', Validators.required],
       fat:['', Validators.required],
       fibre:['', Validators.required],
       grams:['', Validators.required],
       store: ['', Validators.required],
       in_grams:['', Validators.required]
    });
  }

  onSubmit(){
    const  data = this.angForm.value;
    console.log(this.angForm.value);
    const response = this.http.post('http://localhost:3000/api/meals',data);
    response.subscribe(data =>{
      console.log("response")
      console.log(data)
      if(data){
        this.router.navigateByUrl('/pages/meals/meals-list');
      }
    })
    console.log("clicked submit");

  }

  getStores(){
    const store = this.http.get('http://localhost:3000/api/stores');
    store.subscribe(data =>{
      console.log(data);
      this.powers = data;
    })
  }
  

}
