import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html'
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  public UserName = "";
  
  ngOnInit(): void {
  }
}
