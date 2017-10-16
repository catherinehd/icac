import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { HttpClientService } from '../../service/http-client.service';
import { UserStoreService } from '../../service/user-store.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl']
})
export class ModalComponent implements OnInit {
  @Input() modal: Modal;
  @Output() onConfirm = new EventEmitter<number>();
  loginForm: FormGroup;
  login: Login =new Login('','');
  msg: string;
  isOpenEyesShow = true;
  validatorMsg = {
    email: {
      required: '请填写email',
      pattern: '请填写有效的email'
    },
    pwd: {
      required: '请填写密码',
      pattern: '密码为数字或字母',
      minlength: '密码格式为6-15位',
      maxlength: '密码格式为6-15位'
    }
  }

  constructor(private navigateService: NavigateService,
              private userService: UserService,
              private httpClientService: HttpClientService,
              private userStoreService: UserStoreService,
              private formBuilder: FormBuilder,) {
    this.msg = '';

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      'email': [this.login.email, [
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
      ]],
      'pwd': [this.login.pwd, [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]+$/
        ),
        Validators.minLength(6),
        Validators.maxLength(15)
      ]]
    });
  }

  onSubmit() {
    this.testValid();
    if(!this.loginForm.valid) return;
    this.msg = '';
    //this.userService.login(this.loginForm.value.email,this.loginForm.value.pwd).subscribe(res => {
      //res.success ? this.loginSuccess(res.data) : this.showTip(res.msg);
    //})
    this.loginSuccess({
      access_token: 'test_token',
      id: '9',
      name: 'testname',
      email: '33@33.com'
    });
  }

  loginSuccess(user) {
      this.userStoreService.storeUser(user);
      this.httpClientService.refreshHeaders(user.access_token);
      this.navigateService.clearRouteList();
      if(location.pathname==='/home') {
        location.reload();
      } else {
        this.navigateService.pushToNextRoute();
      }
  }

  showTip(msg) {
    this.msg = msg;
  }

  testValid(){
    for (const field in this.login) {
      const control = this.loginForm.get(field);
      if(control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          this.showTip(this.validatorMsg[field][key]);
        }
      }
    }
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

class Login {
  constructor(public  email: string,
              public pwd: string) {}
}
