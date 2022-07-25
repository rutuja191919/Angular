import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Should increment the value by 1',()=>
  {
    let obj = new AppComponent();
    obj.Increment();
    expect(obj.no).toBe(2);
  });

  it('Should decrement the value by 1',()=>
  {
    let obj = new AppComponent();
    obj.Decrement();
    expect(obj.no).toBe(0);
  });
});
