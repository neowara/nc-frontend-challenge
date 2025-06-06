import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer';
import { EventFormComponent } from './event-form/event-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownTimerComponent, EventFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Signals for event name and date, persisted in localStorage
  eventName = signal(localStorage.getItem('eventName') || 'Midsummer Eve');
  eventDate = signal(localStorage.getItem('eventDate') || '2024-06-21');

  onEventNameChange(name: string) {
    this.eventName.set(name);
    localStorage.setItem('eventName', name);
  }
  onEventDateChange(date: string) {
    this.eventDate.set(date);
    localStorage.setItem('eventDate', date);
  }
}
