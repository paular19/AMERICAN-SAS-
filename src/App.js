import './App.css';
import Flayer from './Components/flayer';
import Home from './Components/Home';
import Work from './Components/Work';
import Cards from './Components/Cards';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Work/>
      <Flayer/>
      <Cards/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
