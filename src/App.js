import './App.css';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
        <Services></Services>
        <Pricing></Pricing>
        <Blog></Blog>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
}

export default App;
