import { Component, OnInit } from '@angular/core';
import { FormGroup,   FormBuilder,  Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {config} from '../../../config/dev';


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
  category: String;
  store: String;
  img_url:any;
  fileToUpload: File = null;

   angForm: FormGroup;
   constructor(private fb: FormBuilder, 
    private http:HttpClient,
     private router: Router
     ) {
    this.createForm();
    this.getStores();
  }
  powers:any;
  categories: any[] = ['Breakfast', 'Lunch', 'Dinner'];
   

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
       in_grams:['', Validators.required],
       category:['',Validators.required],
       img_url: ['']
         
    });
  }

  onSubmit(){
     if(this.fileToUpload){
       this.img_url = "/"+this.fileToUpload.name
       console.log(this.img_url)
      }
      console.log(this.img_url)

    const  data = {
      name : this.angForm.value.name,
      carbohydrates: this.angForm.value.carbohydrates,
      protein : this.angForm.value.protein,
      sugar : this.angForm.value.sugar,
      salt: this.angForm.value.salt,
      fat: this.angForm.value.fat,
      fibre: this.angForm.value.fibre,
      grams: this.angForm.value.grams,
      store: this.angForm.value.store,
      in_grams: this.angForm.value.in_grams,
      category: this.angForm.value.category,
      img_url: this.img_url

    }

    console.log(data);
    const response = this.http.post(config.url+'/meals',data);
    this.postFile(this.fileToUpload, data.img_url).subscribe(data=>{
      console.log(data);
    })
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
    const store = this.http.get(config.url+'/stores');
    store.subscribe(data =>{
      console.log(data);
      this.powers = data;
    })
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
postFile(fileToUpload: File, filename) {
   
  // const endpoint = 'http://localhost:42000/Users/user/Desktop/school/project code/client/files';
  const formData: FormData = new FormData();
  formData.append('sampleFile', fileToUpload, filename);
  return this.http
    .post(config.url+'/files', formData );
}
 
}
