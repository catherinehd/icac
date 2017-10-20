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
        userName: userName,
        password: password,
        userRole: userRole,

        "userInfo.prefix": prefix,
        "userInfo.userFn": userFn,
        "userInfo.userLn": userLn,
        "userInfo.userPn": userPn,
        "userInfo.userSchool": userSchool,
        "userInfo.userJob": userJob,
        "userInfo.userAg": userAg,
        "userInfo.userRn": userRn,
        "userInfo.userRi": userRi,
        "userInfo.userRe": userRe,
        "userInfo.userCode": userCode,

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
  modifyPwd(op, np) {
    return this.httpclientService.postMethod({
      url: '/web/user/updatePassword',
      data: {
        op:op,
        np:np,
      }
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
