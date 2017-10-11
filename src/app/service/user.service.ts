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
  register(email, msgCode, loginPwd, prefix, firstName, lastName, school, jobTitle, ceedCode ) {
    return this.httpclientService.getMethod({
      url: 'PZB/User/RegisterStepSecond',
      data: {
        email: email,
        nick_name: email,
        msgCode: msgCode,
        login_pwd: loginPwd,
        prefix: prefix,
        firstName: firstName,
        lastName: lastName,
        school: school,
        jobTitle: jobTitle,
        ceedCode: ceedCode
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

  // 验证短信验证码
  testMsgCode(mobile, msgCode, type) {  // 1 注册 2 修改密码
    const url = type === 1 ? 'PZB/User/RegisterStepFirst' : 'PZB/User/UpdatePwdMobileFirst';
    return this.httpclientService.getMethod({
      url: url,
      data: {
        mobile: mobile,
        code: msgCode
      }
    });
  }


}
