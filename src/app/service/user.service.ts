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
      url: 'User/LoginNum',
      data: {
        nick_name: email,
        login_pwd: loginPwd
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
  updatePwd(email, msgcode) {
    return this.httpclientService.putMethod({
      url: 'PZB/User/UpdatePwdMobileSecond',
      data: {
        email: email,
        msgcode: msgcode,
      }
    });
  }

  // 验证邮箱验证码
  testMsgCode(email) {  // 1 注册 2 修改密码
    return this.httpclientService.getMethod({
      url: 'aa/aa',
      data: {
        email: email
      }
    });
  }


}
