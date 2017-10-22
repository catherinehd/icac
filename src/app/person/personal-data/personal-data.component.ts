import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { PersonService } from '../../service/person.service';
import { HttpClientService } from '../../service/http-client.service';
import { UserStoreService } from '../../service/user-store.service';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.styl']
})
export class PersonalDataComponent implements OnInit {

  user: UserModel = new UserModel();
  isLogin: boolean;

  constructor(private navigateService: NavigateService,
              private userService: UserService,
              private httpClientService: HttpClientService,
              private userStoreService: UserStoreService,
              private personService: PersonService,
              ) {
    //this.isLogin = this.userStoreService.isLogin();
  }

  ngOnInit() {
    this.initUser();
  }

  initUser() {
      this.personService.getUserInfo().subscribe(res =>{
        res.ok ? this.user = res.data : this.isLogin = false;
        }
      );


  }

}
