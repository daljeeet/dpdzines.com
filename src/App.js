import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import '../src/App.css';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
    <Router>
    <Routes>
     <Route exact path='/'element={<Main/>} />
    <Route exact path='/projects' element={<Projects/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;