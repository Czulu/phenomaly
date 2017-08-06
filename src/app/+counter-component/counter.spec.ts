import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CounterComponent } from './counter-component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('Counter component', () => {

  let fixture: ComponentFixture<CounterComponent>;
  let button: HTMLElement;

  function triggerClicks(clicks: number) {
    for (let i = 0; i<clicks; i++) {
      button.click();
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [BrowserModule, FormsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(CounterComponent);
    button = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
  }));

  it('should increment by 1 on button press', async(() => {
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const counter = fixture.debugElement.query(By.css('.form-control'));

      expect(counter.nativeElement.value).toEqual('1');
    });
  }));
  it('should display Fizz in yellow if number is divisible by 3', async(() => {
    triggerClicks(3);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const counter = fixture.debugElement.query(By.css('.form-control'));
      expect(counter.nativeElement.classList.contains('fizz')).toEqual(true);
      expect(counter.nativeElement.value).toEqual('Fizz');
    });
  }));
  it('should display Buzz in blue if number is divisible by 5', async(() => {
    triggerClicks(5);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const counter = fixture.debugElement.query(By.css('.form-control'));
      expect(counter.nativeElement.classList.contains('buzz')).toEqual(true);
      expect(counter.nativeElement.value).toEqual('Buzz');
    });
  }));
  it('should display FizzBuzz in green if number is divisible by 5 and 3', async(() => {
    triggerClicks(15);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const counter = fixture.debugElement.query(By.css('.form-control'));
      expect(counter.nativeElement.classList.contains('fizzbuzz')).toEqual(true);
      expect(counter.nativeElement.value).toEqual('FizzBuzz');
    });
  }));
});
