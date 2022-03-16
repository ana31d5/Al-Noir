import logo from './logo.svg';
import './App.css';
import NavBar from './Components /NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Title from './Components /Title';

function App() {
  return (
    <div className="App">
     <Title/>

<Router>
      <NavBar/>
</Router>
      
 
      
    </div>
  );
}

export default App;
