import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBatch } from './Batch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  public insertBatches(batch : IBatch) : Observable<any>
  {
    return this.http.post<any>('/batches/',batch);
  }

  public getBatches() : Observable<any>
  {
    return this.http.get<any>('/batches/');
  }

  public DeleteBatch(id : any) : Observable<any>
  {
    return this.http.delete<any>('/batches/'+id);
  }

  public getSpecificBatch(id : any) : Observable<any>
  {
    return this.http.get<any>('/batches/'+id);
  }

  public updateBatch(id : any, newbatch : IBatch) : Observable<any>
  {
    console.log(id);
    console.log(newbatch);
    return this.http.patch<any>('/batches/'+id,newbatch);
  }

}
