/**
 * //List of mocked datas url
 */
export const urlMockedDatas = {
  userMainDatas(userId) {
    return `/data${userId}/userDatas.json`;
  },
  userActivityDatas(userId) {
    return `/data${userId}/userActivityDatas.json`;
  },
  userPerformanceDatas(userId) {
    return `/data${userId}/userPerformanceDatas.json`;
  },
  userSessionDatas(userId) {
    return `/data${userId}/userSessionDatas.json`;
  },
};
