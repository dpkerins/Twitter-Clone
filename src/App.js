import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './navBar';
import Home from './Home';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup/" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
