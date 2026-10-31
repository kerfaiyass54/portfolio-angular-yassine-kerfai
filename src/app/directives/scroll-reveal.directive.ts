import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
  host: { class: 'scroll-reveal' },
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef) as ElementRef<HTMLElement>;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.element.nativeElement;
    Array.from(node.children).forEach((child, index) => {
      (child as HTMLElement).style.setProperty('--reveal-index', index.toString());
    });
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.unobserve(node);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    this.observer.observe(node);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
