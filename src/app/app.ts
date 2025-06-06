// Main app component - handles the event data and passes it down to child components

import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CountdownTimerComponent } from './countdown-timer/countdown-timer'
import { EventFormComponent } from './event-form/event-form'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownTimerComponent, EventFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Store event data in signals for reactivity + persist to localStorage
  // Default to midsummer because why not :)
  eventName = signal(localStorage.getItem('eventName') || 'Midsummer Eve')
  eventDate = signal(localStorage.getItem('eventDate') || '2025-06-21')

  onEventNameChange(name: string) {
    this.eventName.set(name)
    localStorage.setItem('eventName', name)
  }

  onEventDateChange(date: string) {
    this.eventDate.set(date)
    localStorage.setItem('eventDate', date)
  }
}
