import logo from './logo.svg';
import './App.css';
// import Navbar from './TeacherScreeen/Navbar';
import React from 'react';
import Navbar from './TeacherScreeen/Navbar';
import Year from './TeacherScreeen/Year';
import Batch from './TeacherScreeen/Batch';

function App() {
  return (
    <>
      <Navbar />
      <Year />
      <Batch/>
    </>
  );
}

export default App;
