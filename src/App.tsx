import './App.css'
import Home from './components/home/home.tsx'
import Toolbox from './components/toolbox/toolbox.tsx';
import Gallery from './components/gallery/gallery.tsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className='react-router-nav'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/toolbox">Toolbox</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toolbox" element={<Toolbox />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App