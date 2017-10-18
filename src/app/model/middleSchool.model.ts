export class middleSchoolModel {
  createTime: string;
  updateTime: null;
  middleId: number;
  middleImage: string;
  middleName: string;
  middleCountry: string;
  middleCity: string;
  middleNum: number;
  middleCode: number;
  middleUrl: string;
  middleState: number;
  middleTxt: string;
  middleGuides: {
    createTime: number;
    updateTime: number
    middleGuideName: string;
    middleGuideJob: string;
    middleGuideMail: string;
    middleGuideNum: number;
    middleGuidePhone: string;
    middleGuideId: number;
    createBy: string;
    updateBy: string;
    guideId: number;
  }
  createBy: string;
  updateBy: string;


  constructor(options?: any) {
    if (options) {
      this.createTime = options.create_time;
      this.updateTime = options.update_time;
    }
  }
}
