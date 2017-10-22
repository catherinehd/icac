import { Component, OnInit } from '@angular/core';
import { PersonService } from '../service/person.service';
import { NavigateService } from '../service/navigate.service';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.styl']
})
export class PersonComponent implements OnInit {

  showperson:boolean;
  showmodifyps:boolean;
  user: UserModel = new UserModel();
  isLogin: boolean;

  constructor(private personService: PersonService,
              private navigateService: NavigateService,) {
    this.showperson = true;
    this.showmodifyps = false;
  }

  ngOnInit() {
    this.personService.getUserInfo().subscribe(res =>{
        res.ok ? this.user = res.data : this.navigateService.pushToRoute('./login');
      }
    );
  }

}
