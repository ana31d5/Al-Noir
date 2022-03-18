import logo from './logo.svg';
import './App.css';
import NavBar from './Components /NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Title from './Components /Title';
import Home from './Components /Pages';
import Product from './Components /Pages/Product'
import Contactus from './Components /Pages/ContactUs';
import Signin from './Components /Pages/Signin';
import SignUp from './Components /Pages/Form/SignUp';


function App() {
  return (
    <div className="App">
     <Title/>

      <Router>
           <NavBar/>

           <Routes>
             <Route path='/HOME' exact element= {<Home/>} />
             <Route path='/PRODUCT'  exact element= {<Product/>} />
             <Route path='/CONTACT-US' exact element= {<Contactus/>} />
             <Route path='/SIGN-UP' exact element= {<SignUp/>} />
             <Route path='/signin' exact element= {<Signin/>} />


           </Routes>



      </Router>
      
 
      
    </div>
  );
}

export default App;
