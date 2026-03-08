import './App.css'
import Home from './components/home/home.tsx'
import Toolbox from './components/toolbox/toolbox.tsx';
import Gallery from './components/gallery/gallery.tsx';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toolbox" element={<Toolbox />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App