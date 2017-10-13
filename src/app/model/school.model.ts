export class schoolModel {
  id: number;
  imgUrl: string;
  name: string;
  address: string;
  university: boolean;
  highschool: boolean;

  constructor(options?: any) {
    if (options) {
      this.id = options.id;
      this.imgUrl = options.img_url;
      this.name = options.name;
      this.address = options.address;
      this.university = options.university;
      this.highschool = options.highschool;
    }
  }
}
