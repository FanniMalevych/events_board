import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import EventsBoard from './components/EventsBoard';
import RegisterForm from './components/RegisterForm';
import EventDetail from './components/EventDetail';

function App() {
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
