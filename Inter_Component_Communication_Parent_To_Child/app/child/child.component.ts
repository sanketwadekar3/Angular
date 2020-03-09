import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() public parentData;

  ngOnInit(): void {
  }

}
