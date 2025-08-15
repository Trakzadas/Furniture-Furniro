import { useState } from 'react';
import Logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { User, MagnifyingGlass, Heart, ShoppingCart, Moon, Sun, List, X } from "phosphor-react";

interface NavProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const parsePrice = (price: string): number => {
  const number = price
    .replace(/[^\d,]/g, '')
    .replace(/\./g, '')
    .replace(',', '.');
  return parseFloat(number);
};

const formatPrice = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

function Nav({ theme, toggleTheme }: NavProps) {
  const [cartVisible, setCartVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.quantity * parsePrice(item.price), 0);

  return (
    <>
      <div className="w-full flex justify-between items-center fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-10 px-4 md:px-20 py-3">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl md:text-[40px] font-bold ml-3 text-gray-900 dark:text-white">
            Funiro
          </h1>
        </div>

        {/* Menu Hamburguer - Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-1 border rounded">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>

        {/* Navegação Desktop */}
            <ul className="hidden md:flex text-lg space-x-10 text-gray-900 dark:text-white">
            <Link to="/home">
              <li className="hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer">Home</li>
            </Link>
            <Link to="/shop">
              <li className="hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer">Shop</li>
            </Link>
            <li className="hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer">About</li>
            <Link to="/contact">
              <li className="hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer">Contact</li>
            </Link>
          </ul>

        {/* Ícones Desktop */}
        <ul className="hidden md:flex justify-between w-72 items-center text-gray-900 dark:text-white">
          <li><User size={20} className="cursor-pointer" /></li>
          <li><MagnifyingGlass size={20} className="cursor-pointer" /></li>
          <li><Heart size={20} className="cursor-pointer" /></li>
          <li>
            <ShoppingCart
              size={20}
              className="cursor-pointer"
              onClick={() => setCartVisible(true)}
            />
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="text-2xl border-[0.5px] border-black py-1 px-1 rounded dark:border-white hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? <Moon size={13} /> : <Sun size={15} />}
            </button>
          </li>
        </ul>
      </div>

      {/* Menu Mobile Aberto */}
      {menuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-white dark:bg-gray-900 shadow-md z-20 flex flex-col items-center py-4 space-y-4">
          <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="flex gap-4 mt-2">
            <User size={20} />
            <MagnifyingGlass size={20} />
            <Heart size={20} />
            <ShoppingCart size={20} onClick={() => setCartVisible(true)} />
          </div>
        </div>
      )}

      {/* Carrinho Lateral */}
      {cartVisible && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-lg border-l dark:border-gray-700 z-50 flex flex-col p-6 animate-slideIn">
          <div className="flex justify-between items-center mb-4 text-gray-900 dark:text-white">
            <h2 className="text-xl font-bold">Carrinho</h2>
            <button 
              onClick={() => setCartVisible(false)} 
              className="text-red-500 dark:text-red-400 text-lg font-bold"
            >
              X
            </button>
          </div>
          <div className="flex-1 overflow-auto text-gray-900 dark:text-white">
            {cart.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cart.map((item, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">x{item.quantity}</span>
                        <button
                          onClick={() => removeFromCart(item.title)}
                          className="text-red-500 hover:text-red-700 dark:hover:text-red-400 font-bold text-lg"
                        >
                          ✕
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t pt-4">
                  <p className="text-lg font-bold">Total: {formatPrice(total)}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
