import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdemoComponent } from './sdemo.component';

describe('SdemoComponent', () => {
  let component: SdemoComponent;
  let fixture: ComponentFixture<SdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
