import { Component, OnInit } from '@angular/core';

import { NotificationService, NotificationData } from '../notification/notification.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(public service: NotificationService) { }

  ngOnInit() {
  }

  showSuccess() {
    const data: NotificationData = {
      title: 'Notificação de sucesso',
      description: 'Deu tudo certo!!!'
    };
    this.service.showSuccess(data);
  }

  showError() {
    const data: NotificationData = {
      title: 'Notificação de erro',
      description: 'Deu alguma bosta'
    };
    this.service.showError(data);
  }
}
