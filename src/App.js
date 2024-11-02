import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
function App() {
  const aboutArray=["Mukesh Kumar","27-sept-2000","Male","Unmarried","Indian","Hindu","Hindi / English","Gurugram","Haryana    "];
  return (
    <>
    <div className="container-fluid ">
      <div className="row justify-content-start">

        <div className="col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 col-xxl-2 nav-outer-box">
         <Navbar />
        </div>

        <div class="col-12 col-sm-12 col-md-9 col-lg-10 col-xl-10 col-xxl-10 main-content-box height-comman">
        <Routes>
          <Route path="/lookmyportfolio" element={<Home name="Mukesh Kumar"/>} />
          <Route path="/about" exact element={<About heading="About" about={aboutArray}/>} />
          <Route path="/education" exact element={<Education heading="Education"/>} />
          <Route path="/skills" exact element={<Skills heading="Skills"/>} />
          <Route path="/projects" exact element={<Projects heading="Projects"/>} />
          <Route path="/contact" exact element={<Contact heading="Contact"/>} />
        </Routes>
        </div>

      </div>
    </div>
    </>
  );
}

export default App;
