import {Component, signal} from '@angular/core';
import {GreetingComponent} from '../components/greeting/greeting.component';
import {CounterComponent} from '../components/counter/counter.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  message = signal('Hello, world!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }

}
