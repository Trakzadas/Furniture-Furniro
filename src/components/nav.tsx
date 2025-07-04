import { useState } from 'react';
import Logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';

// Importando ícones do phosphor-react
import { User, MagnifyingGlass, Heart, ShoppingCart, Moon, Sun } from "phosphor-react";

interface NavProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Converte o preço string ("R$ 2.500,00") em número (2500)
const parsePrice = (price: string): number => {
  const number = price
    .replace(/[^\d,]/g, '')
    .replace(/\./g, '')
    .replace(',', '.');
  return parseFloat(number);
};

// Formata número para BRL
const formatPrice = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

function Nav({ theme, toggleTheme }: NavProps) {
  const [cartVisible, setCartVisible] = useState(false);
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.quantity * parsePrice(item.price), 0);

  return (
    <>
      <div className="w-full flex justify-between items-center fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-10">
        {/* Logo */}
        <div className="flex items-center ml-20">
          <img src={Logo} alt="Logo" />
          <h1 className="text-[40px] font-bold ml-6 text-gray-900 dark:text-white">Funiro</h1>
        </div>

        {/* Navegação */}
        <div>
          <ul className="flex text-[20px] space-x-10 text-gray-900 dark:text-white">
            <Link to="/home"><li>Home</li></Link>
            <Link to="/shop"><li>Shop</li></Link>
            <li>About</li>
            <Link to="/contact"><li>Contact</li></Link>
          </ul>
        </div>

        {/* Ícones e botão de tema */}
        <div>
          <ul className="flex mr-20 justify-between w-72 items-center text-gray-900 dark:text-white">
            <li>
              <User size={20} className="cursor-pointer" />
            </li>
            <li>
              <MagnifyingGlass size={20} className="cursor-pointer" />
            </li>
            <li>
              <Heart size={20} className="cursor-pointer" />
            </li>
            <li>
              <ShoppingCart
                size={20}
                className="cursor-pointer"
                onClick={() => setCartVisible(true)}
              />
            </li>
            {/* Botão de tema */}
            <li>
              <button
                onClick={toggleTheme}
                aria-label="Alternar tema"
                className="text-2xl focus:outline-none transition ml-14 border-[0.5px] border-black py-1 px-1 rounded-[4px] dark:border-white hover:bg-gray-200 dark:hover:bg-gray-800"
                title={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
              >
                {theme === 'light' ? <Moon size={13} /> : <Sun size={15} />}
              </button>
            </li>
          </ul>
        </div>
      </div>

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
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">x{item.quantity}</span>
                        <button
                          onClick={() => removeFromCart(item.title)}
                          className="text-red-500 hover:text-red-700 dark:hover:text-red-400 font-bold text-lg"
                          title="Remover item"
                        >
                          ✕
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-gray-300 dark:border-gray-700 pt-4">
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