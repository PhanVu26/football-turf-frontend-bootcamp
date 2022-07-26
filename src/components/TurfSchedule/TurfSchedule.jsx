import React, { useState, useCallback, buildMessage, useRef, useEffect } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useParams } from 'react-router-dom';
import TurfService from "../../services/TurfService";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'


moment.locale('en-GB');
const localizer = momentLocalizer(moment);

export default function TurfSchedule() {
  const clickRef = useRef(null)
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [status, setStatus] = useState("");

  const [schedules, setSchedules] = useState([])
  let { turfId } = useParams();
  useEffect(()=>{
      TurfService.getScheduleByTurfId(turfId).then((response) => {
          const { data } = response;
          console.log(data);
          setSchedules(data);
      });
  },[turfId])

  const myEventsList = schedules.map((schedule) => (
    { 
      ...schedule, 
      start: new Date(schedule.start), 
      end: new Date(schedule.end),
      title: schedule?.customer?.username
    }));

  const onSelectEvent = useCallback((calEvent) => {
    window.clearTimeout(clickRef?.current)
    console.log(calEvent)
    setIsOpenModal(true)
    setSelectedEvent({ ...calEvent });
    console.log(selectedEvent)
    setStatus(selectedEvent.status)
  }, [])

  const onDoubleClickEvent = useCallback((calEvent) => {
    window.clearTimeout(clickRef?.current)
    clickRef.current = window.setTimeout(() => {
      window.alert(buildMessage(calEvent, 'onDoubleClickEvent'))
    }, 250)
  }, [])

  const handleChangeStatus = (event) => {

  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="App">
      {/* <svg data-testid="AccessTimeIcon"></svg> */}
      <Dialog open={isOpenModal} onClose={handleClose}>
        <DialogTitle>Booking details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {moment(selectedEvent.start).format('HH:mm') + '-' + moment(selectedEvent.end).format('HH:mm')}
          </DialogContentText>
          <DialogContentText>
            {selectedEvent.title}
          </DialogContentText>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Status</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={status}
              label="Age"
              onChange={handleChangeStatus}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"B"}>Booked</MenuItem>
              <MenuItem value={"P"}>Pending</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
          <Button onClick={handleClose}>Delete</Button>
        </DialogActions>
      </Dialog>
      <Calendar
        selectable
        localizer={localizer}
        events={myEventsList}
        style={{ height: 700 }}
        step={15}
        defaultView={'week'}
        defaultDate={new Date()}
        eventPropGetter={(myEventsList) => {
          const backgroundColor = myEventsList.status === 0? 'red' : 'blue';
          return { style: { backgroundColor } }
        }}
        onSelectEvent={onSelectEvent}
        onDoubleClickEvent={onDoubleClickEvent}
      />
    </div>
  );


}


