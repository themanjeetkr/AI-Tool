import React from 'react';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import VolunteerForm from './Components/VolunteerForm.jsx';


const App = () => {
  return (
    <div className="font-sans">
      <Home />
      <About />
      <VolunteerForm />
    </div>
  );
};

export default App;
