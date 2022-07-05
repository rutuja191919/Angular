import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchlist',
  template: `<h1>Inside Batch list</h1>
  <ul *ngFor = "let values of Batches">
  <li>{{values.Name}}</li>
  </ul>
  `
})
export class BatchlistComponent implements OnInit {
  
  public Batches : any= [];

  constructor(private _obj : BatchserviceService) 
  { }

  ngOnInit(): void
  {
    this.Batches = this._obj.GetBatchesDetails().subscribe(data=>this.Batches=data);
  }

}
