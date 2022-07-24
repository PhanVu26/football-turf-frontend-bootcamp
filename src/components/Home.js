
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale('en-GB');
const localizer = momentLocalizer(moment);

const myEventsList = [

  { 
    start: new Date(2022, 6, 25, 13, 30), 
    end: new Date(2022, 6, 25, 14, 30), 
    allDay: false, 
    title: "Vũ Phan - 0967139958 - Pendding" ,
    colorEvento:'yellow'
  },
  { 
    start: new Date(2022, 6, 25, 15, 30), 
    end: new Date(2022, 6, 25, 16, 30), 
    allDay: false, 
    title: "Vũ Phan - 0967139958 - Pendding" ,
    colorEvento:'yellow'
  },
  { 
    start: new Date(2022, 6, 25, 17, 30), 
    end: new Date(2022, 6, 25, 18, 30), 
    allDay: false, 
    title: "Vũ Phan - 0967139958 - Booked" ,
    colorEvento:'blue',
    color: 'white'
  },
  { 
    start: new Date(2022, 6, 26, 15, 0), 
    end: new Date(2022, 6, 26, 16, 0), 
    allDay: false, 
    title: "Huy - 0967139958 - Booked" ,
    colorEvento:'blue',
    color: 'white'
  },
  { 
    start: new Date(2022, 6, 26, 17, 0), 
    end: new Date(2022, 6, 26, 18, 0), 
    allDay: false, 
    title: "Huy - 0967139958 - Pendding" ,
    colorEvento:'yellow'
  },
  { 
    start: new Date(2022, 6, 26, 18, 0), 
    end: new Date(2022, 6, 26, 19, 0), 
    allDay: false, 
    title: "Huy - 0967139958 - Booked" ,
    colorEvento:'blue',
    color: 'white'
  },
  { 
    start: new Date(2022, 6, 27, 19, 0), 
    end: new Date(2022, 6, 27, 20, 0), 
    allDay: false, 
    title: "Vũ Phan - 0967139958 - Pendding",
    colorEvento:'yellow' 
  }
    

];

export default function Home() {
  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        style={{ height: 700 }}
        step={15}
        defaultView={'week'}
        defaultDate={new Date()}
        eventPropGetter={(myEventsList) => {
          const backgroundColor = myEventsList.colorEvento ? myEventsList.colorEvento : 'blue';
          const color = myEventsList.color ? myEventsList.color : 'black';
          return { style: { backgroundColor ,color} }
        }}
      />
    </div>
  );
}
