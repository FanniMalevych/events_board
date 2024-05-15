import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import EventsBoard from './components/EventsBoard';
import RegisterForm from './components/RegisterForm';
import EventDetail from './components/EventDetail';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('/api').then((res) => {
      console.log(res.data);
      
    })
  }, [])

  return (
    <>
      <Router>
        
          <Routes>
            <Route path="/" element={<EventsBoard/>}/>
            <Route path="/register/:id" element={<RegisterForm/>}/>
            <Route path="/detail/:id" element={<EventDetail/>}/>
          </Routes>
    </Router>
    </>
  )
}

export default App
