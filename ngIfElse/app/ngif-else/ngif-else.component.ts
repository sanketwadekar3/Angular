import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-else',
  templateUrl: './ngif-else.component.html'
})
export class NgifElseComponent implements OnInit {

  constructor() { }

  bname:string;
  str:string;
  
  flag:boolean = false;
	
  ngOnInit(): void {
  }
  
  gun(){
	  this.str = 'Your entered partner is '+this.bname;  
	}
	
  fun(event:any)
  {
	  this.flag = true;
	  this.bname = (<HTMLInputElement>event.target).value;
  }

}
