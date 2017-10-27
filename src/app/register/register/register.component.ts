import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { HttpClientService } from '../../service/http-client.service';
import { UserStoreService } from '../../service/user-store.service';
import { PersonService } from '../../service/person.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  register: Register =new Register('','','','','','','','','','','','','',);
  msg: string;
  timer: any;
  isCounting: boolean;
  count: number;
  prompt: boolean;
  isOpenEyesShow1 = true;
  isOpenEyesShow2 = true;
  hasceebcode: boolean;

  errWork: string;
  errEmail: string;
  errCode: string;
  errPwd1: string;
  errPwd2: string;
  errPrefix: string;
  fname: string;
  lname: string;
  errSchool: string;
  errJob: string;
  errCeeb: string;

  constructor(private navigateService: NavigateService,
              private userService: UserService,
              private httpClientService: HttpClientService,
              private userStoreService: UserStoreService,
              private personService: PersonService,
              private formBuilder: FormBuilder,) {
    this.msg = '';
    this.isCounting = false;
    this.hasceebcode = true;
    this.prompt = false;
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
      'agreement':[this.register.agreement, [
      ]],
    });
  }

  //有code
  onSubmit() {
    if(!this.registerForm.value.work || !this.registerForm.value.email || !this.registerForm.value.code || !this.registerForm.value.pwd1 || !this.registerForm.value.pwd2 || !this.registerForm.value.prefix || !this.registerForm.value.firstname || !this.registerForm.value.lastname || !this.registerForm.value.school || !this.registerForm.value.jobtitle || !this.registerForm.value.ceebcode) return;
    //this.testValid();
    if (!this.registerForm.valid) return;
    if(this.registerForm.value.pwd1 !== this.registerForm.value.pwd2 ) return;
    //console.log('ok');
    this.userService.register(this.registerForm.value.email,this.registerForm.value.pwd1,this.registerForm.value.work,this.registerForm.value.prefix,this.registerForm.value.firstname,this.registerForm.value.lastname,this.registerForm.value.preferredName,this.registerForm.value.school,this.registerForm.value.jobtitle,'1','','','',this.registerForm.value.ceebcode).subscribe(res => {
      res.ok ? this.setUser(res.data) : location.reload();//注册失败处理?
    })
  }

  setUser(data) {
    this.prompt = true;
  }

  loginSuccess(user) {
    this.userStoreService.storeUser(user);
    this.httpClientService.refreshHeaders(user.access_token);
    this.navigateService.clearRouteList();
   // this.navigateService.pushToRoute('./home');
    //location.reload();
  }

  getCode() {
      //获取验证码
      this.userService.getCode(this.registerForm.value.email).subscribe(res => {
        res.ok ? this.goSuccess() : this.errCode = res.msg;
      })
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

  showErr(str) {
    switch(str)
    {
      case 'work':
        if(this.registerForm.value.work === '') {
        this.errWork = 'please choose you work for';
        } else {
          this.errWork = '';
        }
        break;
      case 'email':
        if(this.registerForm.value.email === ''){
          this.errEmail = 'please input your email';
        } else {
          const re = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
          const email = re.test(this.registerForm.value.email);
          if(email) {
            this.userService.testEmail(this.registerForm.value.email,1).subscribe(res => {
              res.ok ? this.errEmail ='' : this.errEmail = res.msg;
            })
          } else {
            this.errEmail = 'please input correct email'
          }
        }
        break;
      case 'code':
        if(this.registerForm.value.code === '') {
          this.errCode = 'please input your vertification code';
        } else {
          this.userService.testCode(this.registerForm.value.email,this.registerForm.value.code).subscribe(res => {
            res.ok ? this.errCode = '' : this.errCode = res.msg;
          })
        }
        break;
      case 'pwd1':
        if(this.registerForm.value.pwd1 === '') {
          this.errPwd1 = 'please input your password';
        } else {
          const re = /^[0-9a-zA-Z]{6,15}$/;
          const pwd = re.test(this.registerForm.value.pwd1);
          if(pwd) {
            this.errPwd1 = '';
          } else {
            this.errPwd1 = '密码由6-15英文或数字组成';
          }
        }
        break;
      case 'pwd2':
        if(this.registerForm.value.pwd2 === '') {
          this.errPwd2 = 'please repeat your password';
        } else {
          const re = /^[0-9a-zA-Z]+$/;
          const pwd = re.test(this.registerForm.value.pwd2);
          if(pwd) {
            if(this.registerForm.value.pwd2 === this.registerForm.value.pwd1){
              this.errPwd2 = '';
            } else {
              this.errPwd2 = '两次密码输入不一致';
            }
          } else {
            this.errPwd2 = '密码由6-15英文或数字组成';
          }
        }
        break;
      case 'prefix':
        if(this.registerForm.value.prefix === '') {
        this.errPrefix = 'please choose'
        } else {
          this.errPrefix = '';
        }
        break;
      case 'fname':
        if(this.registerForm.value.firstname === '') {
          this.fname = 'please input your firstname'
        } else {
          this.fname = '';
        }
        break;
      case 'lname':
        if(this.registerForm.value.lastname === '') {
        this.lname = 'please input your lastname'
      } else {
        this.fname = '';
      }
        break;
      case 'school':
        if(this.registerForm.value.school === '') {
          this.errSchool = 'please input your school'
        } else {
          this.errSchool = '';
        }
        break;
      case 'job':
        if(this.registerForm.value.jobtitle === '') {
          this.errJob = 'please input your job title'
        } else {
          this.errJob = '';
        }
        break;
      case 'ceeb':
        if(this.registerForm.value.ceebcode === '') {
          this.errCeeb = 'please input your CEEB Code'
        } else {
          const re = /^\d{6}$/;
          const ceeb = re.test(this.registerForm.value.ceebcode);
          if(ceeb) {
            this.errCeeb = '';
          } else {
            this.errCeeb = '请输入六位CEEB CODE';
          }
        }
        break;
      default:
        return;
    }
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
              public agreement: string,
              ) {}
}
