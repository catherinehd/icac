import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { AppConfigService } from './app-config.service';

@Injectable()
export class UserService {

  constructor(private httpclientService: HttpClientService,
              private appconfigService: AppConfigService) { }

  //登录
  login(email, loginPwd) {
    return this.httpclientService.getMethod({
      url: 'web/user/doLogin',
      data: {
        userName: email,
        password: loginPwd
      }
    })
  }

  // 注册
  register(workfor,email, msgCode, loginPwd, prefix, firstName, lastName, preferredName, school, jobTitle, ceedCode ) {
    return this.httpclientService.getMethod({
      url: 'web/user/doRegister',
      data: {
        workfor: workfor,
        email: email,
        nick_name: email,
        msg_code: msgCode,
        login_pwd: loginPwd,
        prefix: prefix,
        first_name: firstName,
        last_name: lastName,
        preferred_name: preferredName,
        school: school,
        job_title: jobTitle,
        ceed_code: ceedCode,

        userName: email,
        password: loginPwd,
        userRole: workfor,
        userInfo: {
          prefix: prefix,
          userFn: firstName,
          userLn: lastName,
          userPn: preferredName,
          userSchool: school,
          userJob: jobTitle,
          userAg: '',
          userRn: '',
          userRi: '',
          userRe: '',
          userCode: ceedCode
        }
      }
    });
  }

  // 忘记密码
  updatePwd(pwd) {
    return this.httpclientService.putMethod({
      url: 'PZB/User/UpdatePwdMobileSecond',
      data: {
        pwd: pwd,
      }
    });
  }

  // 邮箱获取验证码
  getMsgCode(email,type) {
    return this.httpclientService.getMethod({
      url: '/web/user/check/',
      data: {
        email: email,
        type: 1,
      }
    });
  }

  //验证验证码是否真确
  testMsgCode(email,code) {
    return this.httpclientService.getMethod({
      url: '/web/user/check/',
      data: {
        email: email,
        code: code,
      }
    });
  }


}
