import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type="text" [(ngModel)]="number">
  <h3 [innerText]="number | trCurrencyPipe"></h3>
  `,
  styles: [`h3{
    background-color: white;
  }`]  
})
export class AppComponent {
  number: number = 5500;
  title = 'tr-currency-pipe';
}
