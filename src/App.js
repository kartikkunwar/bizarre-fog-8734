import './App.css';
import {Navbar} from "./components/navbar"
import HomePage from "./HomeComponents/HomePage"
import {Footer} from "./components/footer"


function App() {
  return (
    <div className="App">
       <Navbar/>
       <HomePage/>
       <Footer/>
    </div>
  );
}

export default App;
