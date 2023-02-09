import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import DogDetail from "./components/DogDetail";
import CreateDog from './components/CreateDog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/DogDetail/:name' component={DogDetail} />
        <Route exact path='/DogCreate' component={CreateDog} />
      </BrowserRouter>
    </>
  );
}

export default App;
