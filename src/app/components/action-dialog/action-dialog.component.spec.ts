import { TestBed } from '@angular/core/testing';
import { ActionDialogComponent } from './action-dialog.component';

describe('ActionDialogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ActionDialogComponent] }).compileComponents();
  });

  it('renders its title and action labels', () => {
    const fixture = TestBed.createComponent(ActionDialogComponent);
    fixture.componentRef.setInput('title', 'Discuss a project');
    fixture.componentRef.setInput('confirmLabel', 'Send message');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent).toBe('Discuss a project');
    expect(fixture.nativeElement.textContent).toContain('Send message');
    expect(fixture.nativeElement.querySelector('.launch-button')).not.toBeNull();
  });

  it('emits confirmed and closes the dialog when confirmed', () => {
    const fixture = TestBed.createComponent(ActionDialogComponent);
    const dialog: HTMLDialogElement = fixture.nativeElement.querySelector('dialog');
    dialog.close = vi.fn();
    const confirmed = vi.fn();
    fixture.componentInstance.confirmed.subscribe(confirmed);
    fixture.detectChanges();

    fixture.nativeElement.querySelector('.confirm-button').click();

    expect(confirmed).toHaveBeenCalledOnce();
    expect(dialog.close).toHaveBeenCalledOnce();
  });
});
