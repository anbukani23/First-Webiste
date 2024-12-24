import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'; // Ensure this path is correct
import Home from './Pages/Home'; // Ensure these paths are correct
import About from './Pages/About';
import Admission from './Pages/Admission';
import BoxComponent from './Pages/BoxComponent';
import UGCourses from './Pages/UGCourses';
import PGCourses from './Pages/PGCourses';
import Marquee from './Pages/Marquee';
import Campus from './Pages/Campus';
import Footer from './Components/Footer'
import Courses from './Pages/Courses';
import Placements from './Pages/Placements';
import ContactUs from './Pages/ContactUs';
import Sustainability from './Components/Sustainability';
import Newad from './Pages/Newad'


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/about" element={<><About /><Admission /></>} />
          <Route path="/Courses" element={<><UGCourses /><PGCourses /></>} />
          <Route path="/Campus" element={<Campus/>} />
          <Route path="/Placements" element={<Placements/>} />
          <Route path="/Contact" element={<ContactUs/>} />
          <Route path="/Sustainability" element={<Sustainability/>} />
          <Route path="/newad" element={Newad} />




        </Routes>
        {/* <Marquee />
        <Admission />
        <BoxComponent />
        <UGCourses />
        <PGCourses />
        <Campus /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
