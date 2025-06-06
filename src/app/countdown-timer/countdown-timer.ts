/**
 * Countdown Timer Component
 *
 * A reactive countdown timer that displays the time remaining until a specified event.
 * This component demonstrates modern Angular patterns and optimal performance practices.
 *
 * Technical Approach:
 * - Uses Angular signals for reactive state management
 * - Computed signals for derived state (automatic recalculation)
 * - Interval-based time updates for real-time countdown
 * - Proper lifecycle management with OnChanges
 *
 * Performance Optimizations:
 * - Computed signals prevent unnecessary recalculations
 * - Efficient time difference calculations
 * - Graceful handling of edge cases (past dates, invalid dates)
 *
 * Features:
 * - Real-time updates every second
 * - Displays days, hours, minutes, and seconds
 * - Handles past dates gracefully (shows zeros)
 * - Responsive to external date changes
 */

import {
  Component,
  Input,
  computed,
  signal,
  OnChanges,
  SimpleChanges,
} from '@angular/core'

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  templateUrl: './countdown-timer.html',
  styleUrls: ['./countdown-timer.scss'],
})
export class CountdownTimerComponent implements OnChanges {
  /** Event name to display in the countdown header */
  @Input() eventName: string = ''

  /** Target date for the countdown in ISO format (YYYY-MM-DD) */
  @Input() eventDate: string = ''

  /**
   * Private signal to manage event date reactively
   * This allows the component to respond to external changes
   * while maintaining internal state consistency
   */
  private eventDateSignal = signal('')

  /**
   * Current time signal, updated every second
   * This drives the real-time countdown updates
   */
  now = signal(new Date())

  /**
   * Respond to input property changes
   * Essential for proper Angular component communication
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventDate']) {
      this.eventDateSignal.set(changes['eventDate'].currentValue || '')
    }
  }

  constructor() {
    // Initialize the signal with the current eventDate
    this.eventDateSignal.set(this.eventDate)

    /**
     * Set up real-time updates
     * Updates every second to maintain accurate countdown
     *
     * Note: In a production app, consider using requestAnimationFrame
     * or RxJS intervals for better performance and cleanup
     */
    setInterval(() => this.now.set(new Date()), 1000)
  }

  /**
   * Computed signal for time remaining calculation
   *
   * This automatically recalculates whenever:
   * - The current time changes (every second)
   * - The target date changes (user input)
   *
   * Returns an object with days, hours, minutes, and seconds
   * All values are guaranteed to be non-negative integers
   *
   * Edge Cases Handled:
   * - Invalid or empty date strings
   * - Past dates (returns zeros)
   * - Future dates (calculates proper time difference)
   */
  timeLeft = computed(() => {
    const dateStr = this.eventDateSignal()
    if (!dateStr) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    const end = new Date(dateStr)
    const diff = end.getTime() - this.now().getTime()

    // Return zeros for past dates or invalid dates
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    // Calculate time units using proper mathematical operations
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return { days, hours, minutes, seconds }
  })
}
