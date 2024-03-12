import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import ForWho from './ForWho'; // Import the new component
import Home from './Home';
// import Construction from './under/Construction';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 //` return (
   // <Construction />
 // );
  
  return (  
    <Router>
      <Routes>
        <Route path="/forwho" element={<ForWho />} />
        <Route path="home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<>
          <Home />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;

