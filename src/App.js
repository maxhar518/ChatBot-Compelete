import './App.css';
import Login from './Login.js';
import Signup from './Signup.js';
import OTP from './OTP.js';
import Chat from './Chat.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
     <Routes>
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/OTP' element={<OTP />} />
            <Route path='/Chat' element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
