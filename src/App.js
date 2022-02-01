import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import NavBar from './navBar';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  const [currentSession, setCurrentSession] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home currentSession={currentSession} currentUser={currentUser}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setCurrentSession={setCurrentSession} setCurrentUser={setCurrentUser}/>} />
      </Routes>
    </Router>
  );
}

export default App;
