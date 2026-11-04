import { TestBed } from '@angular/core/testing';
import { StepperComponent, StepItem } from './stepper.component';

describe('StepperComponent', () => {
  const steps: StepItem[] = [
    { title: 'First step', description: 'First description' },
    { title: 'Second step', items: [{ name: 'Angular', icon: 'bi bi-puzzle' }] },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [StepperComponent] }).compileComponents();
  });

  it('renders the current step and its content', () => {
    const fixture = TestBed.createComponent(StepperComponent);
    fixture.componentRef.setInput('steps', steps);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('First step');
    expect(fixture.nativeElement.textContent).toContain('First description');
    expect(fixture.nativeElement.querySelector('[role="progressbar"]').getAttribute('aria-valuenow')).toBe('1');
  });

  it('moves to the next step and emits stepChange', () => {
    const fixture = TestBed.createComponent(StepperComponent);
    fixture.componentRef.setInput('steps', steps);
    const changed = vi.fn();
    fixture.componentInstance.stepChange.subscribe(changed);
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.next-button').click();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Second step');
    expect(fixture.nativeElement.textContent).toContain('Angular');
    expect(changed).toHaveBeenCalledWith(1);
  });
});
