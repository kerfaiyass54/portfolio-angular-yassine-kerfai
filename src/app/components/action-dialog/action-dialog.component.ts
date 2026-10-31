import { Component, ElementRef, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-action-dialog',
  standalone: true,
  templateUrl: './action-dialog.component.html',
  styleUrl: './action-dialog.component.css',
})
export class ActionDialogComponent {
  private readonly dialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  readonly buttonLabel = input('Let’s talk');
  readonly showLauncher = input(true);
  readonly kicker = input('A good next step');
  readonly title = input('Make something matter.');
  readonly cancelLabel = input('Maybe later');
  readonly confirmLabel = input('Get in touch');
  readonly confirmed = output<void>();
  readonly closed = output<void>();

  openDialog(): void { this.dialogRef().nativeElement.showModal(); }
  closeDialog(): void { this.dialogRef().nativeElement.close(); }
  confirm(): void { this.confirmed.emit(); this.closeDialog(); }
  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialogRef().nativeElement) this.closeDialog();
  }
}
