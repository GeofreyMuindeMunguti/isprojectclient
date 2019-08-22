import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username: String;
pass: String;
  constructor(private router: Router) { }

  ngOnInit() {
  }
   
  onKeyName(event: any) { 
    this.username = event.target.value;
  }
  onKeyPass(event: any) { 
    this.pass = event.target.value;
  }
  login(){
   if(!this.username || !this.pass){
     console.log("enter credentials")
     window.confirm('Fields cant be blank')
   }
   else{
     if(this.username == 'admin' && this.pass == 'j21w33jz'){
         this.router.navigate(['/pages/dashboard'])
       }
       else{
        window.confirm('Wrong login credentials?')
         this.router.navigate(['/auth/login'])
       } 
   }

  }

}
