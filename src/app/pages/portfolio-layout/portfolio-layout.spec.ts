import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PortfolioLayout } from './portfolio-layout';
import { LanguageService } from '../../services/language.service';

describe('PortfolioLayout', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioLayout],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the portfolio shell, navigation, and router outlet', () => {
    const fixture = TestBed.createComponent(PortfolioLayout);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.portfolio-shell')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('router-outlet')).not.toBeNull();
    expect(fixture.nativeElement.querySelectorAll('.nav-link')).toHaveLength(6);
  });

  it('toggles the theme and restores the document theme on destroy', () => {
    const fixture = TestBed.createComponent(PortfolioLayout);
    fixture.detectChanges();

    const toggle: HTMLButtonElement = fixture.nativeElement.querySelector('.theme-toggle');
    toggle.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.portfolio-shell').classList).toContain(
      'dark-theme',
    );
    expect(document.documentElement.dataset['theme']).toBe('dark');

    fixture.destroy();
    expect(document.documentElement.dataset['theme']).toBe('light');
  });

  it('updates the shared language when a language option is selected', () => {
    const fixture = TestBed.createComponent(PortfolioLayout);
    fixture.detectChanges();
    const language = TestBed.inject(LanguageService);

    const frenchButton = [
      ...fixture.nativeElement.querySelectorAll('.language-switch button'),
    ].find((button: HTMLButtonElement) => button.textContent.trim() === 'FR') as HTMLButtonElement;
    frenchButton.click();
    fixture.detectChanges();

    expect(language.language()).toBe('fr');
    expect(fixture.nativeElement.querySelector('.portfolio-brand').textContent).toContain(
      'Yassine Kerfai',
    );
  });
});
