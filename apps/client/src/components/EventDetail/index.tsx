import { Box, Card, CardContent, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BackButton from "../BackButton"

export default function EventDetail () {
    const param = useParams()
    const [event, setEvent] = useState({eventDetail: {title: ''}, participants: []})
    const [part, setPart] = useState([])
    const [filteredParticipants, setFilteredParticipants] = useState(event.participants)
    const [inputText, setInputText] = useState("");
    const inputHandler = (e: any) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    useEffect(() => {
        axios.get(`https://events-board-api-a7x1.onrender.com/api/event/${param.id}`).then((res: any) => {
            console.log(res.data);
            setEvent(res.data)
            setFilteredParticipants(res.data.participants)
            setPart(res.data.participants)
        })
    }, [])
    useEffect(() => {
        const newP = part.filter((el: any) => el.name.toLowerCase().includes(inputText) | el.email.toLowerCase().includes(inputText))
        setFilteredParticipants(newP)
        
    }, [inputText])
    return (
        <>
            <BackButton/>
            <Typography variant="h4" m={5}>Event <b>{event?.eventDetail.title}</b> detail</Typography>
            <Box display='flex' alignItems='center'>
                <Typography variant="h6" m={5}>number of participants: {event?.participants.length}</Typography>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    onChange={inputHandler}
                    />
            </Box>
            
            <Box display='flex'>
            {filteredParticipants?.map((el: any) => (
                <Box m={2} key={el.id}>
                <Card sx={{ maxWidth: 345 }} >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {el.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {el.email}
                    </Typography>
                    </CardContent>
                </Card>
                </Box>
            ))}
            </Box>
        </>
    )
}