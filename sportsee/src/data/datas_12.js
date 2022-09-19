const fetchDatasUser = (id, datasUser) => {
  fetch(`/app/data/${id}`)
    .then((res) => res.json())
    .then((res) => {
      datasUser = res;
      console.log("ici");
      console.log(datasUser);
    });
};

const fetchDatasActivity = (id, datasActivity) => {
  fetch(`http://localhost:3000/user/${id}/activity`)
    .then((res) => res.json())
    .then((res) => {
      datasActivity = res;
      console.log("ici");
      console.log(datasActivity);
    });
};

let test = null;

fetchDatasActivity(12, test);

const fetchDatasSession = (id, datasSession) => {
  fetch(`http://localhost:3000/user/${id}/average-sessions`)
    .then((res) => res.json())
    .then((res) => {
      datasSession = res;
      console.log("ici");
      console.log(datasSession);
    });
};

const fetchDatasPerformance = (id, datasPerformance) => {
  fetch(`http://localhost:3000/user/${id}/performance`)
    .then((res) => res.json())
    .then((res) => {
      datasPerformance = res;
      console.log("ici");
      console.log(datasPerformance);
    });
};

export default {
  fetchDatasActivity,
  fetchDatasPerformance,
  fetchDatasSession,
  fetchDatasUser,
};
