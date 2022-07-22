import http from "../http-common";
const getAll = () => {
  return http.get("/turfs");
};
const TurfService = {
    getAll
  };
  export default TurfService;