import "./styles.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import events from "./events";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventWrapper from "./EventWrapper";
const localizer = momentLocalizer(moment);
export default function App() {
  return (
    <div className="App">
      <Calendar
        events={events}
        step={15}
        timeslots={8}
        localizer={localizer}
        defaultView="week"
        defaultDate={new Date(2015, 3, 12)}
        components={{ event: EventWrapper }}
      />
    </div>
  );
}
