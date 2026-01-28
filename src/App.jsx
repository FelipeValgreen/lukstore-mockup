import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Search from './pages/Search';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import { CartProvider } from './context/CartContext';

// Scroll to top on route change
const ScrollToTopHelper = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <CartProvider>
            <Router>
                <ScrollToTopHelper />
                <div className="app">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/zapatillas" element={<Category key="zapatillas" category="Zapatillas" />} />
                            <Route path="/hombre" element={<Category key="hombre" category="Hombre" />} />
                            <Route path="/mujer" element={<Category key="mujer" category="Mujer" />} />
                            <Route path="/accesorios" element={<Category key="accesorios" category="Accesorios" />} />
                            <Route path="/drops" element={<Category key="drops" category="Drops" />} />
                            <Route path="/nosotros" element={<About />} />
                            <Route path="/contacto" element={<Contact />} />
                            <Route path="/product/:id" element={<Product />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/success" element={<Success />} />
                            <Route path="/terminos" element={<div className="container" style={{ padding: '100px 0' }}>Términos y Condiciones (Placeholder)</div>} />
                            <Route path="/privacidad" element={<div className="container" style={{ padding: '100px 0' }}>Política de Privacidad (Placeholder)</div>} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
