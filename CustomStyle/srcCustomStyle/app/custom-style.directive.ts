import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private _eobj : ElementRef)
  {
    this._eobj.nativeElement.style.background ='yellow';
    this._eobj.nativeElement.style.fontWeight ='bold';
  }

}
