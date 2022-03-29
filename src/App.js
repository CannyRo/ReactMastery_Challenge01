// Imports //
import Card from './components/card';
import Footer from './components/footer';
import Header from './components/header';
import './sass/App.scss';

// Variables & Functions //

function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <Footer/>
    </div>
    
  );
}

/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */

export default App;
