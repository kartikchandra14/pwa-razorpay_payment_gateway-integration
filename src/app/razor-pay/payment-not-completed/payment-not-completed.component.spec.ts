import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentNotCompletedComponent } from './payment-not-completed.component';

describe('PaymentNotCompletedComponent', () => {
  let component: PaymentNotCompletedComponent;
  let fixture: ComponentFixture<PaymentNotCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentNotCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentNotCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
