export class UserModel {

  id: number;
  email: string;
  name: string;


  constructor(options?: any) {
    if (options) {
      this.id = options.id;
      this.email = options.email;
      this.name = options.name;
    }
  }
}
