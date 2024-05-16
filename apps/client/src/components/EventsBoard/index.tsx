import axios from "axios";
import { useEffect, useState } from "react"
import EventCard from "../Event";
import { Box, Pagination, Typography } from "@mui/material";
import { paginate } from '../../Utils/Pagination'

export default function EventsBoard () {
 
    const [events, setEvents] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const paginatedEvents = paginate(events, pageSize);
    const currentEvents = paginatedEvents[currentPage - 1];
    
    useEffect(() => {
        axios.get('https://events-board-api-a7x1.onrender.com/api/event').then((res) => {
            setEvents(res.data);
        })
      }, [])

    return (
        <>
        <Typography variant="h4" >List of upcoming events</Typography>
        <Box display='flex' justifyContent='space-around' m={5}>
        {currentEvents && currentEvents.map((el: any) => (
             <EventCard 
                key={el.id}
                title={el.title}
                description={el.description} 
                organizer={el.organizer}
                date={el.date}
                id={el.id}/>))}
        </Box>
        {paginatedEvents.length > 1 && (
        <Box mt={2} display="flex" justifyContent="center">
          <Pagination
            count={paginatedEvents.length}
            page={currentPage}
            onChange={(_, newPage) => setCurrentPage(newPage)}
          />
        </Box>
        )}
        </>
    )
}