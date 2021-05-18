import './App.css';
import cat from './assets/cat.png';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <header className="header">
      <img alt="Logo" width='70px' height="80px" src={cat}/>
      <h2>Catstagram</h2>
      </header>
      <nav className="navbar">
        <div>
        <a href="#">
          Profile
        </a>
        </div>
         <div>
        <a href="#">
          Messages
        </a>
        </div>
         <div>
        <a href="#">
          News
        </a>
        </div>
         <div>
        <a href="#">
          Music
        </a>
        </div>
        <div>
        <a href="#">
          Settings
        </a>
        </div>
      </nav>
      <div className="content">Main content</div>
    </div>
    </div>
  );
}

export default App;
