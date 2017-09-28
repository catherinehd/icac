import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p class="offline-tip" *ngIf="isOffline" [style.top.px]="top" (click)="isOffline = false">当前无网络连接</p>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
