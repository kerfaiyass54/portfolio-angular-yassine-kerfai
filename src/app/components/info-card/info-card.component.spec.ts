import { TestBed } from '@angular/core/testing';
import { InfoCardComponent } from './info-card.component';

describe('InfoCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [InfoCardComponent] }).compileComponents();
  });

  it('renders its configured heading and labels', () => {
    const fixture = TestBed.createComponent(InfoCardComponent);
    fixture.componentRef.setInput('title', 'About me');
    fixture.componentRef.setInput('index', '02');
    fixture.componentRef.setInput('kicker', 'Profile');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h3').textContent).toBe('About me');
    expect(fixture.nativeElement.textContent).toContain('02');
    expect(fixture.nativeElement.textContent).toContain('Profile');
  });
});
