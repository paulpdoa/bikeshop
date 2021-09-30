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

const App = () => {

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let today = new Date();
  let date = (months[today.getMonth()]) + ' ' + today.getDate() + ', ' + today.getFullYear();

  const [user,setUser] = useState('');
  // enters database for user roles
  const [userRole,setUserRole] = useState('user');
  const [adminRole,setAdminRole] = useState('admin');

  // profile page navigation function
  const [profileActive,setProfileActive] = useState('Details');
  const navigateProfile = (page) => {
    setProfileActive(page);
  }

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
    setUser(data);
  },[]);

  return (
      <Switch>
          <Route exact path='/login'>
            <Login setUser={setUser} setUserRole={setUserRole} setAuthStatus={setAuthStatus} authStatus={authStatus}/>
          </Route>
          <Route exact path='/register'>
            <Register userRole={userRole} authStatus={authStatus} />
          </Route>
          <Route exact path='/forgot'>
            <Forgot />
            <Footer />
          </Route>
          <Route exact path='/changepassword/:token/:id'>
            <ChangePassword />
          </Route>
          <Route exact path='/admin/login'>
            <LoginAdmin />
          </Route>
          <Route exact path='/admin/register'>
            <RegisterAdmin />
          </Route>

          {/* dashboard routes */}
          <DashboardRoute exact path='/dashboard' component={Dashboard} date={date} adminRole={adminRole} />
          <DashboardRoute exact path='/sales' component={Sales} date={date} adminRole={adminRole} />
          <DashboardRoute exact path='/addproduct' date={date} component={AddProduct} adminRole={adminRole} />

          <Route exact path="/notfound">
            <ErrorPage />
          </Route>
      
          <> { /* shop routes */}
            <Navbar user={user} setAuthStatus={setAuthStatus} />
            <Switch>
              <ProtectedRoute exact path='/' component={Shop} isAuth={authStatus} userRole={userRole}  />
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
                <div className="flex justify-center relative m-8">
                  <div className="flex max-w-7xl w-full">
                      <UserSideNav profileActive={profileActive} navigateProfile={navigateProfile} />
                      <>
                        { profileActive === 'Details' && <ProtectedRoute exact path='/profile/:userName' component={UserProfile} isAuth={authStatus} /> }
                        { profileActive === 'Orders' && <ProtectedRoute exact path='/profile/:userName' component={UserOrders} isAuth={authStatus} /> }
                        { profileActive === 'History' && <ProtectedRoute exact path='/profile/:userName' component={UserHistory} isAuth={authStatus} /> }
                        { profileActive === 'DeleteAccount' && <ProtectedRoute exact path='/profile/:userName' component={UserDelete} isAuth={authStatus} /> }
                      </>
                    </div>
                </div>
              </Route>
  
              <Route exact path='/about'>
                <About />
                <Footer />
              </Route>

              <Route exact path='/contact-us'>
                <Contact />
                <Footer />  
              </Route>

              <Redirect to='/notfound' />
            </Switch>
          </>
      </Switch>
  );
}

export default App;
