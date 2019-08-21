import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  private config: MatDialogConfig = {
    width: '400px',
    hasBackdrop: false,
    position: {
      bottom: '20px',
      left: '20px'
    }
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showSuccess() {
    this.config.panelClass = 'notification-success';
    this.showNotification();
  }

  showError() {
    this.config.panelClass = 'notification-error';
    this.showNotification();
  }

  showNotification() {
    const notification = this.dialog.open(NotificationComponent, this.config);
    const contador = setTimeout(() => {
      console.log('TIMEOUT');
      notification.close();
    }, 3000);

    notification.afterClosed().subscribe(() => {
      clearTimeout(contador);
      console.log('Fechado');
    });
  }
}
