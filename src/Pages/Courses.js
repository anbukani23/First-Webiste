import React from 'react';
import UGCourses from './UGCourses';
import PGCourses from './PGCourses';
import Header from '../Components/Header';
import Logo from '../Components/Logo'


const Courses = () => {
  return (
    <div>
        {/* <Header /> */}
        <Logo />
      <UGCourses />
      <PGCourses />
    </div>
  )
}

export default Courses;
