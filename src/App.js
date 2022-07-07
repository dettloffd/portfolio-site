import React from 'react';
import "./App.scss";
import {Navbar} from './components'
import {About, Contact, Education, Header, Skills, Work} from './container';


const App = () => {
  return <div className="app">
    <Navbar />
    <Header />
    
    <Education />
    <Skills/>
    <Work />
    <About />
    <Contact />

    
    </div>;
};

export default App;
