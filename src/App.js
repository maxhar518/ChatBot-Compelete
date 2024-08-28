import './App.css';
import Navbar from './Navbar.js';
import Logo from './logo.js'
import Login from './Login.js';
import Signup from './Signup.js';
import OTP from './OTP.js';
import Chat from './Chat.js';
import SendMail from './SendMail.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
       <Router>
        {<Navbar />}
          <div className="routes">
            <Routes>
              <Route path='/' element={<Logo />} />
              <Route path='/SendMail' element={<SendMail />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/OTP' element={<OTP />} />
              <Route path='/Chat' element={<Chat />} />
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
