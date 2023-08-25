import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
constructor(private _appService: AppService){

}
items: string[] = ["one", "two", "three"];

countItems(){
  console.log(this.items.length)
  alert('check console')
}

dummyService(){
  this._appService.dummyFuntion();
}

}
