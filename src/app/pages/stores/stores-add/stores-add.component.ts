import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, Form } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-stores-add',
  templateUrl: './stores-add.component.html',
  styleUrls: ['./stores-add.component.scss']
})
export class StoresAddComponent implements OnInit {
  name:String;
  email: String;
  manager: String;

  storeForm: FormGroup;

  constructor( private fb: FormBuilder,
    private http: HttpClient, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.storeForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required],
       manager: ['', Validators.required]
    });
  }
  onSubmit(){
 //   console.log(this.storeForm.value);
    const data = this.storeForm.value;

    const action = this.http.post('http://localhost:3000/api/stores',data );
    action.subscribe(data =>{
   //  console.log(data);
     if(data){
      this.router.navigateByUrl('/pages/stores/stores-list');
    }
    })

  }

}
