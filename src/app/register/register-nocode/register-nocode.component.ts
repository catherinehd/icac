import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { HttpClientService } from '../../service/http-client.service';
import { UserStoreService } from '../../service/user-store.service';
import { PersonService } from '../../service/person.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-nocode',
  templateUrl: './register-nocode.component.html',
  styleUrls: ['./register-nocode.component.styl','../register/register.component.styl']
})
export class RegisterNocodeComponent implements OnInit {

  registerForm: FormGroup;
  register: Register =new Register('','','','','','','','','','','','','','','');
  msg: string;
  timer: any;
  isCounting: boolean;
  count: number;
  isOpenEyesShow1 = true;
  isOpenEyesShow2 = true;
  hasceebcode: boolean;
  validatorMsg = {
    work: {
      required: "请填写workfor",
    },
    email: {
      required: '请填写email',
      pattern: '请填写有效的email'
    },
    code: {
      required: "请填写workfor",
    },
    pwd1: {
      required: '请填写密码',
      pattern: '密码由6-15英文或数字组成',
      minlength: '密码格式为6-15位',
      maxlength: '密码格式为6-15位'
    },
    pwd2: {
      required: '请填写密码',
      pattern: '密码由6-15英文或数字组成',
      minlength: '密码格式为6-15位',
      maxlength: '密码格式为6-15位'
    },
    prefix: {
      required: "请选择",
    },
    firstname: {
      required: "请填写firstname",
    },
    lastname: {
      required: "请填写lastname",
    },
    preferredname: {
      required: "请填写preferredname",
    },
    school: {
      required: "请填写school",
    },
    jobtitle: {
      required: "请填写jobtitle",
    },
    ceebcode: {
      required: "请填写workfor",
      pattern: '请填写6位code',
    },
    rename: {
      required: "请填写Reference Name",
    },
    reins: {
      required: "请填写Reference Instituition",
    },
    remail: {
      required: "请填写Reference Email",
    },
  }

  constructor(private navigateService: NavigateService,
              private userService: UserService,
              private httpClientService: HttpClientService,
              private userStoreService: UserStoreService,
              private personService: PersonService,
              private formBuilder: FormBuilder,) {
    this.msg = '';
    this.isCounting = false;
    this.hasceebcode = true;
  }

  ngOnInit() {
    this.buildForm();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      'work': [this.register.work, [
        Validators.required,
      ]],
      'email': [this.register.email, [
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
      ]],
      'code': [this.register.code, [
        Validators.required,
      ]],
      'pwd1': [this.register.pwd1, [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]+$/
        ),
        Validators.minLength(6),
        Validators.maxLength(15)
      ]],
      'pwd2': [this.register.pwd2, [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]+$/
        ),
        Validators.minLength(6),
        Validators.maxLength(15)
      ]],
      'prefix': [this.register.prefix, [
        Validators.required,
      ]],
      'firstname': [this.register.firstname, [
        Validators.required,
      ]],
      'lastname': [this.register.lastname, [
        Validators.required,
      ]],
      'preferredname': [this.register.preferredname, [
      ]],
      'school': [this.register.school, [
        Validators.required,
      ]],
      'jobtitle': [this.register.jobtitle, [
        Validators.required,
      ]],
      'ceebcode': [this.register.ceebcode, [
        Validators.required,
        Validators.maxLength(6),
        Validators.pattern(/^\d{6}$/)
      ]],
      'rename': [this.register.rename, [
        Validators.required,
      ]],
      'reins': [this.register.rename, [
        Validators.required,
      ]],
      'remail': [this.register.rename, [
        Validators.required,
        Validators.pattern(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
      ]],
    });
  }

  testValid() {
    for (const field in this.register) {
      const control = this.registerForm.get(field);
      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          this.showTip(this.validatorMsg[field][key]);
        }
      }
    }
    if(this.registerForm.value.pwd1 !== this.registerForm.value.pwd2 ) {
      this.showTip('两次密码输入不一致');
    }
    return;
  }

  //有code
  onSubmit() {
    if(!this.registerForm.value.work || !this.registerForm.value.email || !this.registerForm.value.code || !this.registerForm.value.pwd1 || !this.registerForm.value.pwd2 || !this.registerForm.value.prefix || !this.registerForm.value.firstname || !this.registerForm.value.lastname || !this.registerForm.value.school || !this.registerForm.value.jobtitle || !this.registerForm.value.ceebcode) return;
    this.testValid();
    if (!this.registerForm.valid) return;
    this.msg = '';
    console.log('test');
    this.userService.register(this.registerForm.value.email,this.registerForm.value.pwd1,this.registerForm.value.work,this.registerForm.value.prefix,this.registerForm.value.firstname,this.registerForm.value.lastname,this.registerForm.value.preferredName,this.registerForm.value.school,this.registerForm.value.jobtitle,'agreement','','','',this.registerForm.value.ceebcode).subscribe(res => {
      //res.success ? this.loginSuccess(res.data) : this.showTip(res.msg);
      this.setUser(res), err => {
        this.showTip(res.msg);
      }
    })
  }

  //没有code
  onSubmit2() {
    if(!this.registerForm.value.work || !this.registerForm.value.email || !this.registerForm.value.code || !this.registerForm.value.pwd1 || !this.registerForm.value.pwd2 || !this.registerForm.value.prefix || !this.registerForm.value.firstname || !this.registerForm.value.lastname || !this.registerForm.value.school || !this.registerForm.value.jobtitle || !this.registerForm.value.rename|| !this.registerForm.value.reins|| !this.registerForm.value.remail) return;
    this.testValid();
    if (!this.registerForm.valid) return;
    this.msg = '';
    this.userService.register(this.registerForm.value.email,this.registerForm.value.pwd1,this.registerForm.value.work,this.registerForm.value.prefix,this.registerForm.value.firstname,this.registerForm.value.lastname,this.registerForm.value.preferredName,this.registerForm.value.school,this.registerForm.value.jobtitle,'agreement',this.registerForm.value.rename,this.registerForm.value.reins,this.registerForm.value.remail,'').subscribe(res => {
      //res.success ? this.loginSuccess(res.data) : this.showTip(res.msg);
      this.setUser(res), err => {
        this.showTip(res.msg);
      }
    })
  }

  setUser(data) {
    this.personService.getUserInfo().subscribe(res => {
      this.loginSuccess(res),this.showTip(res.msg);
    })
  }

  loginSuccess(user) {
    this.userStoreService.storeUser(user);
    this.httpClientService.refreshHeaders(user.access_token);
    this.navigateService.clearRouteList();
    this.navigateService.pushToRoute('./home');
    //location.reload();
  }

  showTip(msg) {
    this.msg = msg;
  }

  testemail() {
    const re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    const email = re.test(this.registerForm.value.email);
    if(email) {
      this.userService.testEmail(this.registerForm.value.email,1).subscribe(res => {
        this.showTip(res.msg);
      })
    } else {
      this.showTip('请输入正确邮箱地址');
      return false;
    }
  }

  getCode() {
    //获取验证码
    this.userService.getCode(this.registerForm.value.email).subscribe(res => {
      this.showTip(res.msg),err => {this.showTip('err')};
    })
    //this.goSuccess();
  }

  goSuccess() {
    this.counting();
  }

  counting() {
    this.isCounting = true;
    this.count = 60;
    this.timer = setInterval(() => {
      this.count --;
      if (this.count <= 0) {
        clearInterval(this.timer);
        this.isCounting = false;
      }
    }, 1000);
  }

  testcode() {
    this.userService.testCode(this.registerForm.value.email,this.registerForm.value.code).subscribe(res => {
      this.showTip(res.msg),err => {this.showTip('err')};
    })
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

}


class Register {
  constructor(public work: string,
              public email: string,
              public code: string,
              public pwd1: string,
              public pwd2: string,
              public prefix: string,
              public firstname: string,
              public lastname: string,
              public preferredname: string,
              public school: string,
              public jobtitle: string,
              public ceebcode: string,
              public rename: string,
              public reins: string,
              public reemail: string,) {}
}

