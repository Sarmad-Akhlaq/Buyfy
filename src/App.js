import './App.css';
import {Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Authentication from './Pages/Authentication/Authentication';
import Category from './Pages/Category/Category';
import CategoryProducts from './Pages/CategoryProducts/Categoryproducts';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/authentication" component={Authentication} exact />
      <Route path="/categories" component={Category} exact />
      <Route path="/category-products" component={CategoryProducts} exact />
      <Route path="/checkout" component={Checkout} exact />
    </Switch>
    );
}

export default App;
