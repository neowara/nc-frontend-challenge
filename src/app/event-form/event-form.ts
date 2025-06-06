/**
 * Event Form Component
 *
 * A clean, accessible form component for collecting event details.
 * This component demonstrates modern Angular patterns with proper event handling
 * and component communication through inputs and outputs.
 *
 * Design Principles:
 * - Single responsibility: only handles form input
 * - Unidirectional data flow via Angular's input/output pattern
 * - Type-safe event handling with proper null checks
 * - Immediate feedback for real-time user experience
 *
 * Accessibility Features:
 * - Semantic HTML form elements
 * - Proper labeling for screen readers
 * - Keyboard navigation support
 * - WCAG-compliant styling (handled in SCSS)
 *
 * User Experience:
 * - Real-time updates as user types
 * - Glass morphism design for modern appearance
 * - Responsive layout for all device sizes
 */

import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [],
  templateUrl: './event-form.html',
  styleUrl: './event-form.scss',
})
export class EventFormComponent {
  /** Current event name - received from parent component */
  @Input() eventName = ''

  /** Current event date - received from parent component */
  @Input() eventDate = ''

  /** Emits when the event name changes */
  @Output() eventNameChange = new EventEmitter<string>()

  /** Emits when the event date changes */
  @Output() eventDateChange = new EventEmitter<string>()

  /**
   * Handle event name input changes
   *
   * Provides immediate feedback by emitting changes as the user types.
   * Includes proper null checking for type safety.
   *
   * @param event - DOM input event from the name field
   */
  onNameInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || ''
    this.eventNameChange.emit(value)
  }

  /**
   * Handle event date input changes
   *
   * Emits date changes in ISO format (YYYY-MM-DD) for consistency
   * with HTML date inputs and JavaScript Date objects.
   *
   * @param event - DOM input event from the date field
   */
  onDateInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || ''
    this.eventDateChange.emit(value)
  }
}
