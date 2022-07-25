import http from "../http-common";
const getAll = () => {
  return http.get("/slots");
};
const updateScheduleStatus = (id, data) => {
  return http.put(`/slots/${id}`, data);
};
const ScheduleService = {
  getAll,
  updateScheduleStatus
};
export default ScheduleService;