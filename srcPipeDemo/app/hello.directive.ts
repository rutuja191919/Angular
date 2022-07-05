import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private _eobj : ElementRef){}

  @HostListener('mouseenter')onmouseenter()
  {
    this._eobj.nativeElement.style.background ='yellow'; 
  }
  @HostListener('mouseleave')onmouseleave()
  {
    this._eobj.nativeElement.style.background ='blue'; 
  }

}
