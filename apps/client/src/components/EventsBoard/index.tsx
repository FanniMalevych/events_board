import axios from "axios";
import { useEffect, useState } from "react"

export default function EventsBoard () {
    const [greeting, setGreeting] = useState('')

    useEffect(() => {
        axios.get('/api').then((res) => {
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