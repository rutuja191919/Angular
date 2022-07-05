import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private _eobj : ElementRef) { }

  @HostListener('mouseenter')onmouseenter()
  {
    this._eobj.nativeElement.style.color ='red'; 
  }
  @HostListener('mouseleave')onmouseleave()
  {
    this._eobj.nativeElement.style.color ='black'; 
  }

}
