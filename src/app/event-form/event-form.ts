import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [],
  templateUrl: './event-form.html',
  styleUrl: './event-form.scss',
})
export class EventFormComponent {
  @Input() eventName = '';
  @Input() eventDate = '';
  @Output() eventNameChange = new EventEmitter<string>();
  @Output() eventDateChange = new EventEmitter<string>();

  onNameInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.eventNameChange.emit(value);
  }

  onDateInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.eventDateChange.emit(value);
  }
}
