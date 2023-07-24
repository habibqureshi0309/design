import "./tailwind.css";
import profile from "../src/assets/profile.png";
import updateProfile from "../src/assets/updateProfile.png";
import DateRange from "./components/DateRange";
import TimePick from "./components/TimePick";
import UpdateProfile from './pages/UpdateProfile'
import Profile from './pages/Profile'
import BookingSession from './pages/BookSession'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<BookingSession/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route path="/update-profile" element={<UpdateProfile/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
