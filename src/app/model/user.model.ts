export class UserModel {

  createTime: string;
  state: number;
  updateTime: string;
  userId: number;
  userInfo: {
    createTime: string;
    prefix: string;
    updateTime: string;
    userAg: string;
    userCode: string;
    userFn: string;
    userInfoId: number;
    userJob:string;
    userLn: string;
    userPn: string;
    userRe: string;
    userRi: string;
    userRn: string;
    userSchool: string;
  };
  userName: string;
  userRole: number;



  constructor(options?: any) {
    if (options) {
      this.createTime = options.createTime;
      this.state = options.state;
      this.updateTime = options.updateTime;
      this.userId = options.userId;
      this.userInfo.createTime = options.userInfo.createTime;
      this.userInfo.prefix = options.userInfo.prefix;
      this.userInfo.updateTime = options.userInfo.updateTime;
      this.userInfo.userAg = options.userInfo.userAg;
      this.userInfo.userCode = options.userInfo.userCode;
      this.userInfo.userFn = options.userInfo.userFn;
      this.userInfo.userInfoId = options.userInfo.userInfoId;
      this.userInfo.userJob = options.userInfo.userJob;
      this.userInfo.userLn = options.userInfo.userLn;
      this.userInfo.userPn = options.userInfo.userPn;
      this.userInfo.userRe = options.userInfo.userRe;
      this.userInfo.userRi = options.userInfo.userRi;
      this.userInfo.userRn = options.userInfo.userRn;
      this.userInfo.userSchool = options.userInfo.userSchool;
      this.userName = options.userNmae;
      this.userRole = options.userRole;
    }
  }
}
