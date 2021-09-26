import { Switch,Route, Redirect, useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Axios from 'axios';

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
import UserProfile from './components/profile/UserProfile';

const App = () => {

  const [user,setUser] = useState([]);
  const history = useHistory();

  // set the logged in status of the user
  const [authStatus, setAuthStatus] = useState(true);

  // create a route in the backend to authenticate the users, then pass a json
  useEffect(() => {
    const abortController = new AbortController();

    Axios.get('/api/auth', { signal: abortController.signal })
    .then((res) => {
      if(res.data.isAuth) {
        setAuthStatus(res.data.isAuth);
      }
      if(!res.data.isAuth) {
        setAuthStatus(res.data.isAuth);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    return () => abortController.abort();
  });
  
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
            <Login setUser={setUser} setAuthStatus={setAuthStatus} authStatus={authStatus}/>
          </Route>
          <Route exact path='/register'>
            <Register authStatus={authStatus} />
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
                <ProtectedRoute exact path='/' component={Shop} isAuth={authStatus}  />
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
                <Route exact path='/profile/:userName'>
                  <UserProfile />
                </Route>
                <Redirect to='/notfound' />
              </Switch>
            </>
          </Switch>
    </>
  );
}

export default App;
