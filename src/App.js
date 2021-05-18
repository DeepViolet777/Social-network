import './App.css';
import Header from './components/Header';
import Messages from './components/Messages';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="wrapper">  
     <Header/>
     <Navbar/>
     <Route path="/messages" component={Messages}/>
     <Route path="/profile" component={Profile}/>
    </div>
    </Router>
  );
}

export default App;
