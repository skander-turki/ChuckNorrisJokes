import './App.css';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import {Route ,Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import JokesList from './components/Jokes/JokesList';
import Footer from './components/Footer/Footer';
function App() {
  return (
            <div>
              
            
            <Navbar/>
            <JokesList/>
            <Footer/>
            </div>  );
}

export default App;
