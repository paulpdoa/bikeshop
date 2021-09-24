import {Switch,Route, Redirect,useHistory} from 'react-router-dom';
import { useState,useEffect } from 'react';

import ProtectedRoute from './routes/ProtectedRoute';

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
import Forgot from './components/auth/Forgot';
import ChangePassword from './components/auth/ChangePassword';

const App = () => {

  const [user,setUser] = useState();

  // set the logged in status of the user
  const [authStatus, setAuthStatus] = useState(false);
  
  // saves the state of the logged in user even on refresh
  useEffect(() => {
    const data = window.localStorage.getItem("user");
    setUser(JSON.parse(data));
  },[])
  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  })
  return (
    <>
        <Switch>
          <Route exact path='/login'>
            <Login setUser={setUser} setAuthStatus={setAuthStatus} />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/forgot'>
            <Forgot />
            <Footer />
          </Route>
          <Route exact path='/changepassword/:id'>
            <ChangePassword />
          </Route>
          <Route exact path="/notfound">
            <ErrorPage />
          </Route>
          
            <> { /* routes of every page */}
              <Navbar user={user} setAuthStatus={setAuthStatus} />
              <Switch>
                {/* <Route exact path='/'>
                  <Shop />
                  <Footer />
                </Route> */}
                <ProtectedRoute path='/' component={Shop} isAuth={ authStatus } />
                <Route exact path='/order'>
                  <Order />
                  <Footer />
                </Route>
                <Route exact path='/item/details'>
                  <ItemDetails />
                  <Footer />
                </Route>
                <Route exact path='/cart'> 
                  <Cart />
                  <Footer />
                </Route>
                <Route exact path='/customize'>
                  <Customize />
                  <Footer />
                </Route>
                <Redirect to='/notfound' />
              </Switch>
            </>
          </Switch>
    </>
  );
}

export default App;
