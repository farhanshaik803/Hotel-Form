import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelmainService {

  userName: string = "";

  responseBack: any;

  constructor(private httpRef: HttpClient) { }

  searchForUser() {
    let obs = this.httpRef.get("http://localhost:8023/hotels/" + this.userName);
    obs.subscribe((responseBack) => {
      this.responseBack = responseBack;
      console.log(this.responseBack);
    });
  }
}
