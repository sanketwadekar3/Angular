import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html'
})
export class BatchDetailsComponent implements OnInit 
{
  // Same array is used in both components
  public batches = 
  [
    {"Name":"PPA", "Fees":9000, "Duration":"4 Months"},
    {"Name":"LB", "Fees":7500, "Duration":"4 Months"},
    {"Name":"WEB", "Fees":2500, "Duration":"3 Months"},
    {"Name":"Project", "Fees":4000, "Duration":"3 Months"},
  ];

  ngOnInit() {
  }

}
