import './App.css';
// import HomePage from './HomeComponents/HomePage';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';







function App() {
  return (
    <div className="App">
    <Navbar/>
    
    {/* <HomePage/> */}
    <SignIn/>
    {/* <SignUp/> */}
    
    <Footer/>
    
    </div>
  );
}

export default App;
