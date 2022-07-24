
import React, { useState, useCallback, buildMessage, useRef, useEffect } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


moment.locale('en-GB');
const localizer = momentLocalizer(moment);

const myEventsList = [

  {
    id: 0,
    start: new Date(2022, 6, 25, 13, 30),
    end: new Date(2022, 6, 25, 14, 30),
    allDay: false,
    title: "Vũ Phan - 0967139958 - Pendding",
    colorEvento: 'yellow',
    status: 'P'
  },
  {
    id: 1,
    start: new Date(2022, 6, 25, 15, 30),
    end: new Date(2022, 6, 25, 16, 30),
    allDay: false,
    title: "Vũ Phan - 0967139958 - Pendding",
    colorEvento: 'yellow',
    status: 'P'
  },
  {
    id: 2,
    start: new Date(2022, 6, 25, 17, 30),
    end: new Date(2022, 6, 25, 18, 30),
    allDay: false,
    title: "Vũ Phan - 0967139958 - Booked",
    colorEvento: 'blue',
    color: 'white',
    status: 'P'
  },
  {
    id: 3,
    start: new Date(2022, 6, 26, 15, 0),
    end: new Date(2022, 6, 26, 16, 0),
    allDay: false,
    title: "Huy - 0967139958 - Booked",
    colorEvento: 'blue',
    color: 'white',
    status: 'P'
  },
  {
    id: 4,
    start: new Date(2022, 6, 26, 17, 0),
    end: new Date(2022, 6, 26, 18, 0),
    allDay: false,
    title: "Huy - 0967139958 - Pendding",
    colorEvento: 'yellow',
    status: 'P'
  },
  {
    id: 5,
    start: new Date(2022, 6, 26, 18, 0),
    end: new Date(2022, 6, 26, 19, 0),
    allDay: false,
    title: "Huy - 0967139958 - Booked",
    colorEvento: 'blue',
    color: 'white',
    status: 'P'
  },
  {
    id: 6,
    start: new Date(2022, 6, 27, 19, 0),
    end: new Date(2022, 6, 27, 20, 0),
    allDay: false,
    title: "Vũ Phan - 0967139958 - Pendding",
    colorEvento: 'yellow',
    status: 'P'
  }


];

export default function Home() {
  const clickRef = useRef(null)
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  useEffect(() => {
    
  }, [])

  const onSelectEvent = useCallback((calEvent) => {
    window.clearTimeout(clickRef?.current)
    console.log(calEvent)
    setIsOpenModal(true)
    setSelectedEvent({ ...calEvent });
    console.log(selectedEvent)
  }, [])

  const onDoubleClickEvent = useCallback((calEvent) => {
    window.clearTimeout(clickRef?.current)
    clickRef.current = window.setTimeout(() => {
      window.alert(buildMessage(calEvent, 'onDoubleClickEvent'))
    }, 250)
  }, [])


  const handleClose = () => {
    setIsOpenModal(false);
  };


  return (
    <div className="App">
      <Dialog open={isOpenModal} onClose={handleClose}>
        <DialogTitle>Booking details</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <svg data-testid="AccessTimeIcon"></svg>
            {moment(selectedEvent.start).format('DD-mm-yyy HH:mm') + '-' + moment(selectedEvent.end).format('HH:mm')}
          </DialogContentText>
          <DialogContentText>
            {selectedEvent.title}
          </DialogContentText>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Update</Button>
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
          const backgroundColor = myEventsList.colorEvento ? myEventsList.colorEvento : 'blue';
          const color = myEventsList.color ? myEventsList.color : 'black';
          return { style: { backgroundColor, color } }
        }}
        onSelectEvent={onSelectEvent}
        onDoubleClickEvent={onDoubleClickEvent}
      />
    </div>
  );


}


