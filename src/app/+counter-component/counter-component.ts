import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  styleUrls: ['./counter-component.scss'],
  templateUrl: './counter-component.html',
})
export class CounterComponent {
  private counterText: string | number = 0;
  private counter: number = 0;

  private increment() {
    this.counter++;
    if (this.counter%3==0 && this.counter%5==0) {
      this.counterText = 'FizzBuzz';
    } else if (this.counter%3==0) {
      this.counterText = 'Fizz';
    } else if (this.counter%5==0) {
      this.counterText = 'Buzz';
    } else {
      this.counterText = this.counter;
    }
  }
}
