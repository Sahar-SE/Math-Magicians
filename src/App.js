import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './Component/Calculator';
import Quote from './pages/Quote';
import Home from './pages/Home';
import Nav from './Component/Nav';

function App() {
  return (
    <Router>
      <Nav />
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
