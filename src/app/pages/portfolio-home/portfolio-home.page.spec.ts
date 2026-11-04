import { TestBed } from '@angular/core/testing';
import { PortfolioHomePage } from './portfolio-home.page';

describe('PortfolioHomePage', () => {
  beforeEach(async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    });
    await TestBed.configureTestingModule({ imports: [PortfolioHomePage] }).compileComponents();
  });

  it('renders the portfolio sections and project cards', () => {
    const fixture = TestBed.createComponent(PortfolioHomePage);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-hero-page')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#details')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#education')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#skills')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#projects')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#links')).not.toBeNull();
    expect(fixture.nativeElement.querySelectorAll('.project-card')).toHaveLength(3);
    expect(fixture.nativeElement.querySelectorAll('.profile-link')).toHaveLength(6);
  });

  it('advances the carousel and selects a project from the project dots', () => {
    const fixture = TestBed.createComponent(PortfolioHomePage);
    fixture.detectChanges();

    fixture.nativeElement.querySelector('[aria-label="Next project"]').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.project-title').textContent).toContain('Vehicle Rental Application');

    const analyticsDot = [...fixture.nativeElement.querySelectorAll('.carousel-dots button')]
      .find((button: HTMLButtonElement) => button.getAttribute('aria-label') === 'Show Google Play Analytics') as HTMLButtonElement;
    analyticsDot.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.project-title').textContent).toContain('Google Play Analytics');
  });
});
