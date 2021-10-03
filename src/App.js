import logo from './logo.svg';
import './App.css';
import Weather from './Components/Weather/Weather';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <Router>
        <Route exact path="/" component={Weather} />
        </Router>
    </div>
  );
}

export default App;
