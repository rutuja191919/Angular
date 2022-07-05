import { Component,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent 
{
 @Input() public Data : any = ""; 

 @Output() public Myevent = new EventEmitter();

 public Message = "Hello from Child";

 public Send()
 {
   this.Myevent.emit(this.Message);
 }
}
