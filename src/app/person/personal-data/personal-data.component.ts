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
    this.isLogin = this.userStoreService.isLogin();
  }

  ngOnInit() {
    this.initUser();
  }

  initUser() {
    if(this.isLogin){
      //this.personService.getUserInfo().subscribe(res => this.user = res, err => {
        //if (err && err.status === 401) this.navigateService.pushToRoute('/login');
      //})
      this.user = new UserModel({
        user_id: 1,
        user_name:'1@1.com',
        pass_word: '1@1.com',
        create_time:'1@1.com',
        update_time: '1@1.com',
        user_role:'1@1.com',
        state: 1,
        info_create_time:'1@1.com',
        info_update_time: '1@1.com',
        user_info_id:'1@1.com',
        prefix: 'Mr',
        use_fn:'Li',
        user_ln: 'Ruifeng',
        user_pn:'1@1.com',
        user_school: 'SCHOOL',
        user_job:'....LO',
        user_ag: '1@1.com',
        user_rn:'1@1.com',
        user_ri: '1@1.com',
        user_re:'1@1.com',
        user_user_code: '1@1.com'
      })
    } else {
      this.navigateService.pushToRoute('/home')
    }
  }

}
