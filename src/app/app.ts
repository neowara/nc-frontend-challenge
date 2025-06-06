/**
 * Main Application Component
 *
 * This is the root component that orchestrates the countdown timer application.
 * It manages global state for event data and provides a clean separation of concerns
 * between the form input and timer display components.
 *
 * Architecture:
 * - Uses Angular's modern standalone component approach
 * - Leverages signals for reactive state management
 * - Implements localStorage for data persistence across browser sessions
 * - Follows unidirectional data flow patterns
 *
 * State Management:
 * - Event name and date are stored as signals for reactivity
 * - Data is automatically persisted to localStorage on changes
 * - Default values ensure the app works out-of-the-box
 */

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
  /**
   * Reactive signals for event data with localStorage persistence
   *
   * Using signals provides:
   * - Automatic reactivity across components
   * - Better performance with fine-grained updates
   * - Type safety with TypeScript
   *
   * Default values ensure the app demonstrates functionality immediately
   */
  eventName = signal(localStorage.getItem('eventName') || 'Midsummer Eve')
  eventDate = signal(localStorage.getItem('eventDate') || '2025-06-21')

  /**
   * Handle event name changes from the form component
   *
   * @param name - New event name from user input
   */
  onEventNameChange(name: string) {
    this.eventName.set(name)
    localStorage.setItem('eventName', name)
  }

  /**
   * Handle event date changes from the form component
   *
   * @param date - New event date in ISO format (YYYY-MM-DD)
   */
  onEventDateChange(date: string) {
    this.eventDate.set(date)
    localStorage.setItem('eventDate', date)
  }
}
