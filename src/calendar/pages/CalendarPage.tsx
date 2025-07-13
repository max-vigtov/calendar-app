import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import { NavBar } from "../components/NavBar"
import { addHours } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const myEventsList = [
  {
    title: 'Cumpleaños de Max',
    notes: 'Comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Max',
    },
  },
]

export const CalendarPage = () => {
  return (
	<>
		<NavBar />

    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
    />
  </>
  )
}