import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  constructor() { }

  processPayment(totalPrice: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
    
      setTimeout(() => {
        resolve(true); 
      }, 2000);
    });
  }
}
