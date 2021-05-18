import './App.css';
import Header from './components/Header';
import Messages from './components/Messages';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import News from './components/News';
import Music from './components/Music';
import Settings from './components/Settings';
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
     <Route path="/news" component={News}/>
     <Route path="/music" component={Music}/>
     <Route path="/settings" component={Settings}/>
    </div>
    </Router>
  );
}

export default App;
