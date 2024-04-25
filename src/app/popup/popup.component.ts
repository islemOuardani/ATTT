import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  constructor(private dialogRef: MatDialogRef<PopupComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
