import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Order from './Order';
import Navbar from './partials/Navbar';
import Shop from './Shop';
import ItemDetails from './ItemDetails';
import Cart from './Cart';
import Customize from './Customize';

const Main = () => {
    return (
        <div>
           <Navbar />
              <Route exact path='/'>
                <Shop />
              </Route>

              <Route exact path='/order'>
                <Order />
              </Route>

              <Route exact path='/item/details'>
                <ItemDetails />
              </Route>

              <Route exact path='/cart'> 
                <Cart />
              </Route>

              <Route exact path='/customize'>
                <Customize />
              </Route>

             <Route path="/404/not-found">
                 <ErrorPage />
             </Route>
             
             <Route path="*">
                 <Redirect to="/404/not-found" />
             </Route>
        </div>
    )
}

export default Main
