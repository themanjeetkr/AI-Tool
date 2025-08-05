import React from 'react';
import Home from './components/Home';
import About from './components/About';
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
