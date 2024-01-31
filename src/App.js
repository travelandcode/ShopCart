import './App.css';
import './index.css'
import Home from './pages/home.js'
import Cart from './pages/cart.js'
import { CartProvider } from './providers/cart_provider.js';
import { ProductProvider } from './providers/product_provider.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { UserProvider } from './providers/user_provider.js';
import Product from './pages/store_product.js';
import Success from './pages/success.js';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <UserProvider>
          <BrowserRouter>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
          </BrowserRouter>
          </UserProvider>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;