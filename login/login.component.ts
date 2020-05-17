import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username='mrinal'
  password='123'


  constructor() { }

  ngOnInit(): void {
  }

  displayMessage(val){
  
    console.log(val);
  }

  handleLogin(){
this.username=this.username;
    console.log(this.username);
  }
 


}
