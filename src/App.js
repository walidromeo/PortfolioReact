import {useEffect} from "react"
import './App.css';
import Main from "./Component/Main";
import "font-awesome/css/font-awesome.min.css";
import About from './Component/About';
import Skills from './Component/Skills';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import AOS from "aos"
function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/skills" component={Skills}></Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
