export class UserModel {

  userId: number;
  userName: string;
  password: string;
  createTime: string;
  updateTime: string;
  userRole: string;
  state: number;
  userInfoCreateTime: string;
  userInfoUpdateTime: string;
  userInfouserInfoId: number;
  userInfoPrefix: string;
  userInfoUserFn: string;
  userInfoUserLn: string;
  userInfoUserPn: string;
  userInfoUserSchool: string;
  userInfoUserJob: string;
  userInfoUserAg: string;
  userInfoUserRn: string;
  userInfoUserRi: string;
  userInfoUserRe: string;
  userInfoUserCode: string;


  constructor(options?: any) {
    if (options) {
      this.userId = options.user_id;
      this.userName = options.user_name;
      this.password = options.pass_word;
      this.createTime = options.create_time;
      this.updateTime = options.update_time;
      this.userRole = options.user_role;
      this.state = options.state;
      this.userInfoCreateTime = options.info_create_time;
      this.userInfoUpdateTime = options.info_update_time;
      this.userInfouserInfoId = options.user_info_id;
      this.userInfoPrefix = options.prefix;
      this.userInfoUserFn = options.use_fn;
      this.userInfoUserLn = options.user_ln;
      this.userInfoUserPn = options.user_pn;
      this.userInfoUserSchool = options.user_school;
      this.userInfoUserJob = options.user_job;
      this.userInfoUserAg = options.user_ag;
      this.userInfoUserRn = options.user_rn;
      this.userInfoUserRi = options.user_ri;
      this.userInfoUserRe = options.user_re;
      this.userInfoUserCode = options.user_code;
    }
  }
}
