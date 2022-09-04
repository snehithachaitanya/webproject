import './App.css';
import Button from '@material-ui/core/Button'
import Signin from './Signin';
import Home from './Home';
import { BrowserRouter, Route , Router, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signin/>}/>
        <Route exact path="/Home" element={<Home/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
