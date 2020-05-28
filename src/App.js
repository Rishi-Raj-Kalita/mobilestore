import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from "./components/Cart"
import { Route,Switch} from "react-router-dom"

function App() {
  return (
   <div>
     <Navbar/>
     <Switch>
      <Route path="/" exact component={ProductList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route component={Default}/>
     </Switch>
   </div>

  );
}

export default App;
