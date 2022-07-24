import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ApiService } from './api.service';
import { IBatch } from './Batch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  jsonObj : any;
  public results : any;

  public constructor(private service : ApiService)
  {}

  public Send(data1 : any, data2 : any)
  {
    let obj : IBatch = {name : data1, duration : data2};

    console.log(obj);
    this.service.insertBatches(obj).subscribe(res=>
    console.log("Success!",res),
    error => console.log("Error!",error)
    );
  }

  public Get()
  {
    this.service.getBatches().subscribe(res=>{
     this.results = JSON.stringify(res);
     this.jsonObj = JSON.parse(this.results);
     for(var i = 0; i < this.jsonObj.length; i++)
     {
      console.log(this.jsonObj[i]['name']);
     }
     
     console.log("Success on get!",res)
          
    },
    error => console.log("Error!",error)
    );
  }

  public Delete(id : any)
  {
    this.service.DeleteBatch(id).subscribe(res=>
    console.log("Success on delete!"),
    error => console.log("Error!",error)
    );
  }

  public GetSpecific(id : any)
  {
    this.service.getSpecificBatch(id).subscribe(res=>{
     this.results = JSON.stringify(res);
     console.log(this.results);
     console.log("Success on delete!");
    },
    error => console.log("Error!",error)
    );
  }

  public Update(id : any, data1 : any, data2 : any)
  {
    let newobj : IBatch = {name : data1, duration : data2};

    this.service.updateBatch(id,newobj).subscribe(res=>{
     this.results = JSON.stringify(res);
     console.log(this.results);
     console.log("Success on delete!");
    },
    error => console.log("Error!",error)
    );
  }
}
