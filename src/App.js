/*
import logo from './logo.svg';
import './App.css';
*/
import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/resume":
      component = <Resume />
      break
  }
  return (
  <>
  <Navbar />
  <div className="container"> 
  {component}
  </div>
  </>
  )
  /*(
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
  );*/
}

export default App;
