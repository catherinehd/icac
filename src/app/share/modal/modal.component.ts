import { Component, OnInit, Input, EventEmitter, Output, } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { PersonService } from '../../service/person.service';
import { EventsService } from '../../service/events.service';
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
  @Output() onConfirm = new EventEmitter<string>();
  // @Output() onSetStatus = new EventEmitter<number>();
  loginForm: FormGroup;
  login: Login =new Login('','');
  noRegisterNumber: boolean; //会议注册是否有输入电话号码
  successRegister: boolean; //会议注册成功时候为true
  msg: string;
  isOpenEyesShow = true;
  phoneNum: number;
  isSafari: boolean;//是safari的时候改变password的样式
  validatorMsg = {
    email: {
      required: 'please input your email',
      pattern: 'please input correct email'
    },
    pwd: {
      required: 'please input your password',
      pattern: 'The password should be made up of 6-15 letters or numbers',
      minlength: 'The password should be made up of 6-15 letters or numbers',
      maxlength: 'The password should be made up of 6-15 letters or numbers'
    }
  }

  constructor(private navigateService: NavigateService,
              private userService: UserService,
              private personService: PersonService,
              private eventsService: EventsService,
              private httpClientService: HttpClientService,
              private userStoreService: UserStoreService,
              private formBuilder: FormBuilder,) {
    this.msg = '';
    this.noRegisterNumber = true;
    this.phoneNum = null;
    this.successRegister = false;
  }

  ngOnInit() {
    this.buildForm();
    this.browser();
  }

  confirm() {
    this.onConfirm.emit();
  }

  // setStatus(num) {
  //   this.onSetStatus.emit(num);
  // }

  browser() {
    if(navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") < 0) {
      this.isSafari = true;
    } else {
      this.isSafari = false;
    }
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      'email': [this.login.email, [
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9]+[_|\_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
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
    this.userService.login(this.loginForm.value.email,this.loginForm.value.pwd).subscribe(res => {
      res.ok ? this.loginSuccess(res.data) : this.showTip(res.msg);
    })
  }

  loginSuccess(data) {
      this.navigateService.clearRouteList();
      const d = new Date();
    if(location.hash.split('/')[1] === 'register') {
      this.go('./home');
    } else {
      location.reload();
    }
      //this.navigateService.pushToRoute('./home');
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

  //检查邮箱
  checkemail() {
    this.userService.testEmail(this.loginForm.value.email,1).subscribe(res => {
      this.showTip(res.msg);
    })
  }

  //回车键提交表单
  btnSubmit(e){
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  // 获取电话号码
  getPhoneNum(num) {
    this.phoneNum = num;
  }

  // 会议注册
  onRegister() {
    // 提交注册会议信息
    this.eventsService.registerConference(this.modal.fName, this.modal.lName, this.modal.theme, this.modal.email, this.phoneNum, this.modal.school).subscribe( res => {
      if(res.ok) {
        // 报名成功
        this.afterSuccessRegister();
      } else {
        console.log(res.msg);
      }
    })
  }

  afterSuccessRegister() {
    this.confirm();
    this.successRegister = true;
    setTimeout(() => {
      this.successRegister = false;
      // this.setStatus(1); //设置register按钮状态，1的时候表示已经注册。
      location.reload();
    }, 2000)
  }

}

class Modal {
  constructor(public title?: string,
              public isRegisterShow? : boolean,
              public isSigninShow? : boolean,
              public isVerifyMailboxShow? : boolean,
              public isResetPwShow? : boolean,
              public fName? : string,
              public lName? : string,
              public theme? : string,
              public email? : string,
              public school? : string,
  ) { }
}

class Login {
  constructor(public  email: string,
              public pwd: string) {}
}
