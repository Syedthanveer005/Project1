import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Router/Home';
import Education from './Router/Education';
import Service from './Router/Service';
import Contact from './Router/Contact';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="menu">
          <Link to="">Home</Link>
          <Link to="/Education">Education</Link>
          <Link to="/Service">Service</Link>
          <Link to="/Contact">Contact</Link>
        </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
