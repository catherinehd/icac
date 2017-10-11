import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl']
})
export class ModalComponent implements OnInit {
  @Input() modal: Modal;


  constructor(private navigateService: NavigateService) {

  }

  ngOnInit() {
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

}

class Modal {
  constructor(public title?: string
  ) { }
}
