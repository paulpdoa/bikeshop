import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ErrorPage from './components/ErrorPage';
import Order from './components/Order';
import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer';
import Shop from './components/Shop';
import ItemDetails from './components/ItemDetails';
import Cart from './components/Cart';
import Customize from './components/Customize';
import Main from './components/Main';

const App = () => {

  return (
    <>
     <Router>
       <Switch>
         <Route exact path='/login'>
           <Login />
         </Route>
         
         <Route exact path='/register'>
           <Register />
         </Route>
         
         <Main />

         
            
        </Switch>
      </Router> 
      <Footer />
    </>
  );
}

export default App;
