import { Component, Input, computed, signal, OnChanges, SimpleChanges } from '@angular/core'
import { FitTextComponent } from '../shared/fit-text/fit-text'

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [FitTextComponent],
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.scss',
})
export class CountdownTimerComponent implements OnChanges {
  @Input() eventName: string = ''
  @Input() eventDate: string = ''

  // Signals for reactive data
  private eventDateSignal = signal('')
  now = signal(new Date())
  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventDate']) {
      this.eventDateSignal.set(changes['eventDate'].currentValue || '')
    }
  }

  constructor() {
    // Initialize the signal with the current eventDate
    this.eventDateSignal.set(this.eventDate)
    // Update now every second
    setInterval(() => this.now.set(new Date()), 1000)
  }

  // Computed signal for time left
  timeLeft = computed(() => {
    const dateStr = this.eventDateSignal()
    if (!dateStr) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    
    const end = new Date(dateStr)
    const diff = end.getTime() - this.now().getTime()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    return { days, hours, minutes, seconds }
  })
}
