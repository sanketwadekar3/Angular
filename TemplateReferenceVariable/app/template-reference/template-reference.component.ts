import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html'
})
export class TemplateReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  AcceptData(value){
	  console.log(value); 
	}
}
