import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailBox from './Components/EmailBox/EmailBox';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import NavbarTwo from './Components/SecondNabar/NavbarTwo';
import Testimonials from './Components/Testimonials/Testimonials';
import Whyus from './Components/whyUs/Whyus';
import PageTwo from './Components/PageTwo';

function App() {
  return (
    <Router>
      <Navbar />
      <NavbarTwo />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <EmailBox />
            <Whyus />
            <Testimonials />
            <Footer />
          </>
        } />
        <Route path="/pageTwo" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
