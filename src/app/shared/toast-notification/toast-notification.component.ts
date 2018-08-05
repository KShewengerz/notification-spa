import { Component, OnInit } from '@angular/core';

import { ToastNotification, ToastNotificationService } from './index';


@Component({
  selector: 'app-toast-notification',
  template: `<app-notification [notification]="notification"></app-notification>`,
  styles: [``]
})
export class ToastNotificationComponent implements OnInit {
  
  notification: ToastNotification;
  
  constructor(private toastNotificationService: ToastNotificationService) { }
  
  ngOnInit() {
    this.onNewNotification();
  }
  
  onNewNotification(): void {
    this.toastNotificationService
    .newNotification
    .subscribe(notification => notification ? this.notification = notification : null);
  }

}
