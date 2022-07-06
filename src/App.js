import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Calculator from './Component/Calculator';
import Quote from './pages/Quote';
import Home from './pages/Home';
import './css/nav.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div>
          <h1>Math Magicians</h1>
        </div>
        <div className="nav-item">
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/calculator">Calculator</Link>
          <Link className="links" to="/quote">Quote</Link>
        </div>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/calculator"
          element={(
            <section className="App">
              <Calculator />
            </section>
)}
        />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>

  );
}

export default App;
