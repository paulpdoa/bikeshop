import { Switch,Route, Redirect } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Axios from 'axios';

import ProtectedRoute from './routes/ProtectedRoute';

import Login from './components/shop/auth/Login';
import Register from './components/shop/auth/Register';
import Forgot from './components/shop/auth/Forgot';
import ChangePassword from './components/shop/auth/ChangePassword';
import ErrorPage from './components/shop/ErrorPage';
import Order from './components/shop/Order';
import Navbar from './components/shop/partials/Navbar';
import Footer from './components/shop/partials/Footer';
import Shop from './components/shop/Shop';
import ItemDetails from './components/shop/ItemDetails';
import Cart from './components/shop/Cart';
import Customize from './components/shop/Customize';
import UserProfile from './components/shop/profile/UserProfile';
import UserOrders from './components/shop/profile/UserOrders';
import UserSideNav from './components/shop/profile/UserSideNav';
import UserHistory from './components/shop/profile/UserHistory';
import UserDelete from './components/shop/profile/UserDelete';
import About from './components/shop/About';
import Contact from './components/shop/Contact';
// admin
import Dashboard from './components/admin/Dashboard';
import LoginAdmin from './components/admin/auth/LoginAdmin';
import Sales from './components/admin/Sales';
import DashboardRoute from './components/admin/routes/DashboardRoute';
import AddProduct from './components/admin/AddProduct';
import RegisterAdmin from './components/admin/auth/RegisterAdmin';
import LogoutModal from './components/modals/LogoutModal';
import ProfileRoute from './routes/ProfileRoute';

const App = () => {

  // creating dates
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let today = new Date();
  let date = (months[today.getMonth()]) + ' ' + today.getDate() + ', ' + today.getFullYear();

  const [user,setUser] = useState('');
  const [admin,setAdmin] = useState('');
  const [role,setRole] = useState('');

  // modals
  const [logoutMssg, setLogoutMssg] = useState(false);
  const [registerMssg,setRegisterMssg] = useState(false);


  // profile page navigation function
  const [profileActive,setProfileActive] = useState('Details');
  const navigateProfile = (page) => {
    setProfileActive(page);
  }

  // set the logged in status of the user
  const [authStatus, setAuthStatus] = useState(false);
  

  // create a route in the backend to authenticate the users, then pass a json
  useEffect(() => {
    const abortController = new AbortController();
    Axios.get('/api/auth', { signal: abortController.signal })
    .then((res) => {
      if(res.data.isAuth) {
        setAuthStatus(res.data.isAuth);
        setRole(res.data.role);
      }
      if(!res.data.isAuth) {
        setAuthStatus(res.data.isAuth);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    return () => abortController.abort();
  },[]);

    // create a route in the backend to authenticate the admin, then pass a json
    useEffect(() => {
    const abortController = new AbortController();
    Axios.get('/api/admin/auth', { signal: abortController.signal })
    .then((res) => {
      if(res.data.isAuth && res.data.role === 'admin') {
        setAuthStatus(res.data.isAuth);
        setRole(res.data.role);
      }
      if(!res.data.isAuth) {
        setAuthStatus(res.data.isAuth);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    return () => abortController.abort();
  },[]);
  
  // saves the state of the logged in user even on refresh
  useEffect(() => {
    const data = window.localStorage.getItem("user");
    setUser(data);
  },[]);
  
  useEffect(() => {
   const data = window.localStorage.getItem("admin");
   setAdmin(data);
  },[])

  return (
      <Switch>
          <Route exact path='/login'>
            <Login setUser={setUser} setAuthStatus={setAuthStatus} authStatus={authStatus} setRole={setRole} />
          </Route>
          <Route exact path='/register'>
            <Register authStatus={authStatus} setRegisterMssg={setRegisterMssg} registerMssg={registerMssg} />
          </Route>
          <Route exact path='/forgot'>
            <Forgot />
            <Footer />
          </Route>
          <Route exact path='/changepassword/:token/:id'>
            <ChangePassword />
          </Route>
          <Route exact path='/admin/login'>
            <LoginAdmin setRole={setRole} setAuthStatus={setAuthStatus} setAdmin={setAdmin} />
          </Route>
          <Route exact path='/admin/register'>
            <RegisterAdmin registerMssg={registerMssg} setRegisterMssg={setRegisterMssg} />
          </Route>

          {/* dashboard routes */}
          <DashboardRoute exact path='/dashboard' component={Dashboard} date={date} role={role} isAuth={authStatus} admin={admin} 
          logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} />

          <DashboardRoute exact path='/dashboard/sales' component={Sales} date={date} role={role} admin={admin} 
          logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} />

          <DashboardRoute exact path='/addproduct' date={date} component={AddProduct} role={role} admin={admin} 
          logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} />
          {/* dashboard routes */}

          <Route exact path="/notfound">
            <ErrorPage />
          </Route>
      
          <> { /* shop routes */}
            {/* <Navbar user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg} /> */}
            <Switch>
              <ProtectedRoute exact path='/' component={Shop} logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} 
                user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg}
              />
              <ProtectedRoute exact path='/order' component={Order} logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} 
                user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg}   
              />
              <ProtectedRoute exact path='/item/details' component={ItemDetails} logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} 
                user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg}
              />
              <ProtectedRoute exact path='/cart' component={Cart} logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} 
                user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg}
              />
              <ProtectedRoute exact path='/customize' component={Customize} logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} 
                user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg}
              />
              <ProfileRoute exact path='/profile/:userName' profileActive={profileActive} navigateProfile={navigateProfile} 
                user={user} logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} setAuthStatus={setAuthStatus}
              />
              <ProtectedRoute exact path='/about' component={About} logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} 
                user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg}
              />
              <ProtectedRoute exact path='/contact-us' component={Contact} logoutMssg={logoutMssg} setLogoutMssg={setLogoutMssg} 
                user={user} setAuthStatus={setAuthStatus} setLogoutMssg={setLogoutMssg} 
              />
              <Redirect to='/notfound' />
            </Switch>
          </>
      </Switch>
  );
}

export default App;
