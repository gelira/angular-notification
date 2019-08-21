import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showNotification() {
    const notification = this.dialog.open(NotificationComponent);
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
