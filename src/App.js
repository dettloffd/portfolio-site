import React from 'react';
import "./App.scss";
import {Footer, Navbar} from './components'
import { Contact, Education, Header, Skills, Work} from './container';


const App = () => {
  return <div className="app">
    <Navbar />
    <Header />
    
    <Education />
    <Skills/>
    <Work />
    <Contact />
    <Footer />

    
    </div>;
};

export default App;
