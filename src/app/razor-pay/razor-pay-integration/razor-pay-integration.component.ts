import {Component, OnInit, NgZone} from '@angular/core';
import { Router } from '@angular/router';
import {ICustomWindow, WindowRefService} from '../window-ref.service';

@Component({
  selector: 'app-razor-pay-integration',
  templateUrl: './razor-pay-integration.component.html',
  styleUrls: ['./razor-pay-integration.component.css']
})
export class RazorPayIntegrationComponent implements OnInit {

  constructor(
    private zone: NgZone,
    private winRef: WindowRefService,
    private router: Router
  ) {
    this._window = this.winRef.nativeWindow;
  }
  ngOnInit(): void {
    console.log('razorPayComponent');
  }
  
  
    private _window: ICustomWindow;
    public rzp: any;
  
    public options: any = {
      key: '', // add razorpay key here
      name: 'Kartik Chandra',
      description: 'Shopping',
      amount: 100, // razorpay takes amount in paisa
      prefill: {
        name: 'Kartik Chandra',
        email: 'kartik.chandra@4thpointer.com', // add your email id
      },
      notes: {},
      theme: {
        color: '#3880FF'
      },
      handler: this.paymentHandler.bind(this),
      modal: {
        ondismiss: (() => {
          this.zone.run(() => {
            // add current page routing if payment fails[
            this.router.navigate(['payment/paymentNotCompleted'])
          })
        })
      }
    };
  
    
  
    initPay(): void {
      this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
      this.rzp.open();
    }
  
    paymentHandler(res: any) {
      this.zone.run(() => {
        // add API call here
      });
    }
  
}
