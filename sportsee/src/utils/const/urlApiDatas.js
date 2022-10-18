// List of API url
/**
 * List of Endpoints
 */
export const urlApiDatas = {
  userMainDatas(userId) {
    return `http://localhost:3000/user/${userId}`;
  },
  userActivityDatas(userId) {
    return `http://localhost:3000/user/${userId}/activity`;
  },
  userPerformanceDatas(userId) {
    return `http://localhost:3000/user/${userId}/performance`;
  },
  userSessionDatas(userId) {
    return `http://localhost:3000/user/${userId}/average-sessions`;
  },
};
