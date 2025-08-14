// App.tsx
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/home";
import Footer from "./components/footer";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Cadastro from './features/login/cadatro';
import Nav from "./components/nav";
import { CartProvider } from './components/CartContext';
import { useTheme } from './assets/tema/hook';

import './App.css';

interface AppLayoutProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

function AppLayout({ toggleTheme, theme }: AppLayoutProps) {
  const location = useLocation();
  // Verifica se a rota é login ou cadastro
  const hideLayout = location.pathname === "/" || location.pathname === "/cadastro";

  return (
    <>
      {!hideLayout && <Nav toggleTheme={toggleTheme} theme={theme} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <CartProvider>
      <Router>
        <AppLayout toggleTheme={toggleTheme} theme={theme} />
      </Router>
    </CartProvider>
  );
}

export default App;
