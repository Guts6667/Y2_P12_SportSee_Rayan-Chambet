import ActivityDatas from "../class/ActivityDatas";
import PerformanceDatas from "../class/PerformanceDatas";
import SessionDatas from "../class/SessionDatas";
import MainDatas from "../class/MainDatas";

// This functions picks the right Class depending on the url
const convertDatas = (res, url) => {
  console.log(url);
  if (url.includes("activity") || url.includes("userActivityDatas")) {
    return new ActivityDatas(res.data.userId, res.data.sessions);
  }
  if (url.includes("performance") || url.includes("userPerformanceDatas")) {
    return new PerformanceDatas(res.data.userId, res.data.kind, res.data.data);
  }
  if (url.includes("average-sessions") || url.includes("userSessionDatas")) {
    return new SessionDatas(res.data.userId, res.data.sessions);
  } else {
    return new MainDatas(
      res.data.id,
      res.data.userInfos,
      res.data.todayScore,
      res.data.score,
      res.data.keyData
    );
  }
};

export default convertDatas;
