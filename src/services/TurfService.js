import http from "../http-common";
const getAll = () => {
  return http.get("/turfs");
};
const login = data  => {
  return http.post("/api/users/login", data);
}

const getMainTurfs = () => {
  return http.get("/api/mainturfs/getmainturflist")
} 

const getTurfsInMainTurf = id => {
  return http.get(`/api/Turfs/getTurfsInMainTurf?mainTurfId=${id}`);
}

const getScheduleByTurfId = turfId => {
  return http.get(`/api/schedule/getScheduleInAMonth?turfId=${turfId}`);
};

const TurfService = {
    getAll,
    login,
    getMainTurfs,
    getTurfsInMainTurf,
    getScheduleByTurfId,
  };
  export default TurfService;