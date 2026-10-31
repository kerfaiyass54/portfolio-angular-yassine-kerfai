import { TestBed } from '@angular/core/testing';
import { FlipCardComponent } from './flip-card.component';

describe('FlipCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [FlipCardComponent] }).compileComponents();
  });

  it('exposes an accessible label and configured face labels', () => {
    const fixture = TestBed.createComponent(FlipCardComponent);
    fixture.componentRef.setInput('ariaLabel', 'Project details');
    fixture.componentRef.setInput('frontLabel', 'Overview');
    fixture.componentRef.setInput('backLabel', 'Details');
    fixture.detectChanges();

    const card: HTMLElement = fixture.nativeElement.querySelector('.flip-card');
    expect(card.getAttribute('aria-label')).toBe('Project details');
    expect(fixture.nativeElement.textContent).toContain('Overview');
    expect(fixture.nativeElement.textContent).toContain('Details');
  });
});
