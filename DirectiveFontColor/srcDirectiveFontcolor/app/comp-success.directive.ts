import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private _eobj : ElementRef){}

  @HostListener('mouseenter')onmouseenter()
  {
    this._eobj.nativeElement.style.color ='green'; 
  }
  @HostListener('mouseleave')onmouseleave()
  {
    this._eobj.nativeElement.style.color ='black'; 
  }
}
