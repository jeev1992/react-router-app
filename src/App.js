import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import { Component1 } from './components/Component1';
import { Component2 } from './components/Component2';
import { Component3 } from './components/Component3';

function App() {

  const navigate = useNavigate();
  
  return (
    <div className="App">
      <h1>I am in the main App Component</h1>
      <Router>
        <nav>
          <ul>
            <li><Link to ="/component1">Component1</Link></li>
            <li><Link to ="/component2">Component2</Link></li>
            <li><Link to ="/component3">Component3</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/component1' element={<Component1 />} />
          <Route path='/component2' element={<Component2 />} />
          <Route path='/component3' element={<Component3 />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
