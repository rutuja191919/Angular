import { Injectable } from '@angular/core';
import { IBatches } from './Batches';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchserviceService {

  //Logic
  //Connection to server

  private URL = "./assets/Data/Batches.json";

  constructor(private _obj : HttpClient) { }

  public GetBatchesDetails() : Observable<IBatches[]>
  {
   return this._obj.get<IBatches[]>(this.URL);
  }

}
