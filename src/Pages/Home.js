import React from 'react'
// import Header from '../Components/Header'
import Marquee from '../Pages/Marquee';
import Admission from '../Pages/Admission';
import BoxComponent from './BoxComponent';
import UGCourses from './UGCourses';
import PGCourses from './PGCourses';
import Campus from './Campus';
import Logo from '../Components/Logo'
import Newad from './Newad';
const Home = () => {
  return (
    <div>
        {/* <Header/> */}
      {/* <h1>hi</h1> */}
      <Newad />
      <Logo />
      <Marquee />
        <Admission />
        <BoxComponent />
        <UGCourses />
        <PGCourses />
        <Campus />
    </div>
  )
}

export default Home;
