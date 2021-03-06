import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Local imports
import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import MiceScreen from './screens/MiceScreen';
import HeadsetsScreen from './screens/HeadsetsScreen';
import KeyboardScreen from './screens/KeyboardsScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import WishlistScreen from './screens/WishlistScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact/>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/mice" component={MiceScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/headsets" component={HeadsetsScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/keyboards" component={KeyboardScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/about-us" component={AboutScreen} />
        <Route path="/contact-us" component={ContactScreen} />
        <Route path="/saved/:id?" component={WishlistScreen} />
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/userList' component={UserListScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
