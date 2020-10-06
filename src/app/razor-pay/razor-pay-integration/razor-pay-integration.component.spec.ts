import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazorPayIntegrationComponent } from './razor-pay-integration.component';

describe('RazorPayIntegrationComponent', () => {
  let component: RazorPayIntegrationComponent;
  let fixture: ComponentFixture<RazorPayIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazorPayIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RazorPayIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
