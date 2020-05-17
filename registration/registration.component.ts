import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

username: any;
password: number;
email: any;
phoneno: number;

  constructor() { }

  ngOnInit(): void {
  }
   
  displayMessage(val){

    console.log(val);
    
    }


}
