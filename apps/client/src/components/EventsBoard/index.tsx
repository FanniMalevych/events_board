import axios from "axios";
import { useEffect, useState } from "react"

export default function EventsBoard () {
    const [greeting, setGreeting] = useState('')

    useEffect(() => {
        axios.get('https://events-board-api.vercel.app/api').then((res) => {
        console.log(res.data);
        
          setGreeting(res.data)
        })
      }, [])

    return (
        <>
        <p>list of events</p>
        <p>{greeting}</p>
        </>
    )
}