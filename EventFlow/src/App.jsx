
import './App.css'
import Evento from './components/Evento';
import Navbar from './components/Navbar';
import  { useState } from 'react';

const App = () => {
  return (
    <div className="bg-blue-950 min-h-screen">
      <Navbar />
    <Evento/>
    </div>
  );
};

export default App;