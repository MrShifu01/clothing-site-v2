import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Product from './components/Product';
import User from './components/User';
import Legal from './components/Legal';
import { Routes, Route } from 'react-router-dom'
import products from './components/assets/products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Routes>
        <Route exact path="/" element={<Landing isLoggedIn={false} />} />
        <Route path="/shop" element={
          <>
            <h1 class="products-heading">Latest Products</h1>
            <div class="products-container">
              {products.map((product) => (
                <div sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </>
        } 
        />
        <Route path="/user" element={<User loginState={true} />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
