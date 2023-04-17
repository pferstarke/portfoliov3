import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Projects from './pages/Projects';
import Tools from './pages/Tools';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

import AppNavbar from './components/AppNavbar';

function App() {

  

  return (
    <Router>
      <Container>
      <AppNavbar />
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/tools" element={<Tools />}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
