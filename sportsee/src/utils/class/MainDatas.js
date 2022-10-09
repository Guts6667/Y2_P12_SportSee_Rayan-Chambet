// Class made to format the data related to the user main datas
export default class MainDatas {
  constructor(id, userInfos, score, todayScore, keyData) {
    this.id = id;
    this.userInfos = userInfos;
    this.score = score;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }
}
