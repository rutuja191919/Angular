import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdemoComponent } from './ademo.component';

describe('AdemoComponent', () => {
  let component: AdemoComponent;
  let fixture: ComponentFixture<AdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
