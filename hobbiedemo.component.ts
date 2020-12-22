import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbiedemo',
 // templateUrl: './hobbiedemo.component.html',
 template:`<h1>App Component</h1>
 <ul>
  <li *ngFor="let h of hobbies">{{ h.hobbie | mypipe:h.hobbie}}</li>
 </ul> `, 
 styleUrls: ['./hobbiedemo.component.css']
})
export class HobbiedemoComponent implements OnInit {
  hobbies:any = [
    {
      hobbie:'dancing'
  },
  {
    hobbie:'singing'
},
     ];
 
  constructor() { }

  ngOnInit() {
  }

}
