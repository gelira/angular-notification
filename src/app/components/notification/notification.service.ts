import { Injectable } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { NotificationComponent } from './notification.component';

export interface NotificationData {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private config: MatDialogConfig = {
    width: '400px',
    hasBackdrop: false,
    position: {
      bottom: '20px',
      left: '20px'
    }
  };
  private timeout = 3000;

  constructor(public dialog: MatDialog) { }

  set Timeout(value: number) {
    this.timeout = value;
  }

  showError(data: NotificationData) {
    this.config.panelClass = 'notification-success';
    this.showNotification(data);
  }

  showSuccess(data: NotificationData) {
    this.config.panelClass = 'notification-error';
    this.showNotification(data);
  }

  private showNotification(data: NotificationData) {
    this.config.data = data;
    const notification = this.dialog.open(NotificationComponent, this.config);

    const contador = setTimeout(() => {
      console.log('TIMEOUT');
      notification.close();
    }, this.timeout);

    notification.afterClosed().subscribe(() => {
      clearTimeout(contador);
      console.log('Fechado');
    });
  }
}
