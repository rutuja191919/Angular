import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent 
{
  @Output() onHit : EventEmitter<string> = new EventEmitter<string>();

  constructor(){}
 
  OnSubmit(name : any) : void{
    this.onHit.emit(name);
  }
 
}
