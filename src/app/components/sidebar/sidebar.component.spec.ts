import { TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SidebarComponent] }).compileComponents();
  });

  it('renders navigation links and marks the active link', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.componentRef.setInput('links', [{ label: 'Projects', icon: 'bi bi-grid', href: '#projects' }]);
    fixture.componentRef.setInput('activeHref', '#projects');
    fixture.detectChanges();

    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('.nav-link');
    expect(link.textContent).toContain('Projects');
    expect(link.getAttribute('aria-current')).toBe('page');
  });

  it('emits the selected language', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const languageChange = vi.fn();
    fixture.componentInstance.languageChange.subscribe(languageChange);
    fixture.detectChanges();

    const frenchButton = [...fixture.nativeElement.querySelectorAll('.language-switch button')]
      .find((button: HTMLButtonElement) => button.textContent.trim() === 'FR') as HTMLButtonElement;
    frenchButton.click();

    expect(languageChange).toHaveBeenCalledWith('fr');
  });
});
