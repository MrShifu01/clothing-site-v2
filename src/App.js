import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Product from './components/Product';
import User from './components/User';
import Legal from './components/Legal';
import { Routes, Route } from 'react-router-dom'
import products from './components/assets/products';
import InterestCalc from './components/InterestCalc';

function App() {
  return (
    <div className="App">
      {/* Always display header and Nav */}
      <header className="App-header">
        <Header/>
      </header>
      {/* Brining in Routes to show componenet sif on a certain route */}
      <Routes>
        {/* Using a state set to false for logged in on the home page */}
        <Route exact path="/" element={<Landing isLoggedIn={false} />} />
        <Route path="/shop" element={
          <>
          {/* Looping through the products schema to display producs */}
            <h1 className="products-heading">Latest Products</h1>
            <div className="products-container">
              {products.map((product) => (
                <div sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </>
        } 
        />
        <Route path="/user" element={<User />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/interest" element={<InterestCalc />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
