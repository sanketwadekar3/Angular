import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html'
})
export class NgforComponent implements OnInit {

  constructor() { }

  Names = ["Sanket","Devikesh","Omkar","Shivam"];
  
  ngOnInit(): void {
  }

}
