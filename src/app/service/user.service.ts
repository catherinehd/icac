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
      url: '/web/user/doLogin',
      data: {
        userName: email,
        password: loginPwd
      }
    })
  }

  // 注册
  register(userName, password, userRole, prefix, userFn, userLn, userPn, userSchool, userJob, userAg, userRn, userRi, userRe, userCode) {
    return this.httpclientService.postMethod({
      url: '/web/user/doRegister',
      data: {
        userName: 'test@1.com',
        password: '111111',
        userRole: 0,

        "userInfo.prefix": '11',
        "userInfo.userFn": '11',
        "userInfo.userLn": '11',
        "userInfo.userPn": '11',
        "userInfo.userSchool": '11',
        "userInfo.userJob": '11',
        "userInfo.userAg": '11',
        "userInfo.userRn": '11',
        "userInfo.userRi": '11',
        "userInfo.userRe": '11',
        "userInfo.userCode": '11',

      }
    });
  }

  //检查邮箱
  testEmail(email, type) {
    return this.httpclientService.getMethod({
      url: '/web/user/check/'+ email +'/' + type,
    });
  }

  //注册 获取验证码
  getCode(userName) {
    return this.httpclientService.getMethod({
      url: '/web/user/valid/'+userName,
    });
  }

  //注册 验证验证码
  testCode(userName,code) {
    return this.httpclientService.getMethod({
      url: '/web/user/checkValid/'+ userName + '/' + code,
    });
  }

  //修改密码
  modifyPwd() {
    return this.httpclientService.postMethod({
      url: '/web/user/updatePassword',
    })
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

  // 忘记密码 邮箱获取验证码
  getMsgCode(userName) {
    return this.httpclientService.getMethod({
      url: '/web/user/validReset/'+ userName,
    });
  }

  //忘记密码 验证验证码是否正确
  testMsgCode(userName,code) {
    return this.httpclientService.getMethod({
      url: '/web/user/checkvalidReset/'+ userName + '/' + code,
    });
  }


}
