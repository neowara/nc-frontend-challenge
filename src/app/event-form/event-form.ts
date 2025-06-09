import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core'

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [],
  templateUrl: './event-form.html',
  styleUrl: './event-form.scss',
})
export class EventFormComponent {
  @Input() eventName = ''
  @Input() eventDate = ''

  @Output() eventNameChange = new EventEmitter<string>()
  @Output() eventDateChange = new EventEmitter<string>()

  @ViewChild('hiddenDateInput') hiddenDateInput!: ElementRef<HTMLInputElement>

  get formattedDate(): string {
    if (!this.eventDate) return ''

    try {
      // Handle YYYY-MM-DD format (standard date input format)
      if (/^\d{4}-\d{2}-\d{2}$/.test(this.eventDate)) {
        const [year, month, day] = this.eventDate.split('-').map(Number)
        const date = new Date(year, month - 1, day) // month is 0-indexed

        if (!isNaN(date.getTime())) {
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        }
      }

      // Fallback: try parsing the date as-is
      const date = new Date(this.eventDate)
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      }

      return this.eventDate
    } catch {
      return this.eventDate
    }
  }

  onNameInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || ''
    this.eventNameChange.emit(value)
  }

  onDateChange(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || ''
    this.eventDateChange.emit(value)
  }

  onDatePickerClick(event: Event) {
    event.preventDefault()
    event.stopPropagation()

    if (this.hiddenDateInput?.nativeElement) {
      const hiddenInput = this.hiddenDateInput.nativeElement
      hiddenInput.focus()
      hiddenInput.click()

      if (
        'showPicker' in hiddenInput &&
        typeof hiddenInput.showPicker === 'function'
      ) {
        try {
          hiddenInput.showPicker()
        } catch {
          // showPicker isn't supported everywhere yet
        }
      }
    }
  }
}
