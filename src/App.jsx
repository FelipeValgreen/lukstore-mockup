import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Search from './pages/Search';
import Category from './pages/Category';
import Drops from './pages/Drops';

// Institutional Pages
import About from './pages/About';
import Contact from './pages/Contact';

import Blog from './pages/Blog/Blog';
import BlogPost from './pages/Blog/BlogPost';

// Support Pages
import SizeGuide from './pages/Support/SizeGuide';
import Shipping from './pages/Support/Shipping';
import Authenticity from './pages/Support/Authenticity';
import Legal from './pages/Support/Legal';
import Admin from './pages/Admin';
import Tracking from './pages/Tracking';
import FAQ from './pages/Support/FAQ';
import NotFound from './pages/NotFound';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
    return (
        <CartProvider>
            <div className="app">
                <Header />
                <ScrollToTop />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/zapatillas" element={<Category type="basketball" />} />
                        <Route path="/streetwear" element={<Category type="streetwear" />} />
                        <Route path="/drops" element={<Drops />} />
                        {/* Aliases for better navigation feel */}
                        <Route path="/hombre" element={<Category type="streetwear" />} />
                        <Route path="/mujer" element={<Category type="streetwear" />} />
                        <Route path="/accesorios" element={<Category type="drops" />} />

                        <Route path="/nosotros" element={<About />} />
                        <Route path="/contacto" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />

                        <Route path="/search" element={<Search />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/success" element={<Success />} />

                        <Route path="/guia-tallas" element={<SizeGuide />} />
                        <Route path="/envios" element={<Shipping />} />
                        <Route path="/autenticidad" element={<Authenticity />} />
                        <Route path="/terminos" element={<Legal />} />
                        <Route path="/privacidad" element={<Legal />} />

                        {/* Auth */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/* Admin & Tools */}
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/tracking" element={<Tracking />} />
                        <Route path="/faq" element={<FAQ />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </CartProvider>
    );
}

export default App;
