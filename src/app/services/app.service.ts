import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  dummyFuntion(){
    console.log("I'm from service");
    alert("check console");
  }
}
