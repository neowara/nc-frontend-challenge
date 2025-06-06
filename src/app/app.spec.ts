import { TestBed } from '@angular/core/testing'
import { App } from './app'

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should render countdown timer app', () => {
    const fixture = TestBed.createComponent(App)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.main')).toBeTruthy()
    expect(compiled.querySelector('app-countdown-timer')).toBeTruthy()
    expect(compiled.querySelector('app-event-form')).toBeTruthy()
  })
})
