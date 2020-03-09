import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Output() public MyEvent = new EventEmitter();
  
  public SendEvent()
  {
	  this.MyEvent.emit("Hello from Child")
  }

  ngOnInit(): void {
  }

}
