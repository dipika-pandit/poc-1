
import './App.css';
import NavbarComponent from './Component/NavbarComponent';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Product from './Component/Product';
import Contact from './Component/Contact';



function App() {
  return (
  <>
    <Router>
    <NavbarComponent/>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/about" element ={<About/>}/>

        <Route path ="/product" element ={<Product/>}/>

        <Route path ="/contact" element ={<Contact/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
