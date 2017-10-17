import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { HttpClientService } from '../../service/http-client.service';
import { UserStoreService } from '../../service/user-store.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.styl']
})
export class ResetPwdComponent implements OnInit {

  isOpenEyesShow1 = true;
  isOpenEyesShow2 = true;
  msg: string;
  pwdForm: FormGroup;
  pwd: Pwd =new Pwd('','');
  validatorMsg = {
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
    }
  }

  constructor(
    private navigateService: NavigateService,
    private userService: UserService,
    private httpClientService: HttpClientService,
    private userStoreService: UserStoreService,
    private formBuilder: FormBuilder,
  ) {
    this.msg = '';
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.pwdForm = this.formBuilder.group({
      'pwd1': [this.pwd.pwd1, [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]+$/
        ),
        Validators.minLength(6),
        Validators.maxLength(15)
      ]],
      'pwd2': [this.pwd.pwd2, [
        Validators.required,
        Validators.pattern(/^[0-9a-zA-Z]+$/
        ),
        Validators.minLength(6),
        Validators.maxLength(15)
      ]]
    });
  }

  testValid(){
    for (const field in this.pwd) {
      const control = this.pwdForm.get(field);
      if(control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          this.showTip(this.validatorMsg[field][key]);
        }
      }
    }
    if(this.pwdForm.value.pwd1 !== this.pwdForm.value.pwd2) {
      this.showTip("两次输入的密码不一致");
    }
    return;
  }

  onSubmit() {
    this.testValid();
    if(!this.pwdForm.valid) return;
    this.msg = '';
    //this.userService.updatePwd(this.pwdForm.value.pwd1).subscribe(res => {
      //res.success ? this.resetPwdSuccess(res.data) : this.showTip(res.msg);
    //})
    this.resetPwdSuccess('1');
  }

  resetPwdSuccess(msg){
    this.go('./person');
}


  showTip(msg) {
    this.msg = msg;
  }

  go(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

}

class Pwd {
  constructor(public  pwd1: string,
              public pwd2: string) {}
}
