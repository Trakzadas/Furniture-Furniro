import React from 'react';
import ImageCard from '../../assets/img/card.svg';
import Sy from '../../assets/img/sy.svg';
import Loli from '../../assets/img/loli.svg';
import Resp from '../../assets/img/resp.svg';
import Grifo from '../../assets/img/grifo.svg';
import Muggo from '../../assets/img/muggo.svg';
import { useCart } from '../../components/CartContext';


type CardProps = {
  title: string;
  description: string; // Preço
  image: string;
  onAddToCart: (title: string, image: string, price: string) => void;
};

const Card: React.FC<CardProps> = ({ title, description, image, onAddToCart }) => {
  return (
    <div className="bg-white shadow-2xl overflow-hidden rounded-md flex flex-col">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-bold mb-2  text-[#35322d]">{title}</h2>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <button
          onClick={() => onAddToCart(title, image, description)}
          className="mt-4 border-[#B88E2F] border px-4 py-2 text-[#B88E2F] rounded hover:bg-[#c0ba75] transition"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

// 🔁 Lista de produtos com título, preço e imagem
const cardData = [
  { title: 'Syltherine', description: '$2.500,00', image: Sy },
  { title: 'Leviosa', description: '$2.500,00', image: Loli },
  { title: 'Lolito', description: '$7.000,00', image: ImageCard },
  { title: 'Respira', description: '$500,00', image: Resp },
  { title: 'Grifo', description: '$2.500,00', image: Grifo },
  { title: 'Muggo', description: '$2.500,00', image: Muggo },
  { title: 'Syltherine', description: '$2.500,00', image: Sy },
  { title: 'Leviosa', description: '$2.500,00', image: Loli },
  { title: 'Lolito', description: '$7.000,00', image: ImageCard },
  { title: 'Respira', description: '$500,00', image: Resp },
  { title: 'Grifo', description: '$2.500,00', image: Grifo },
  { title: 'Muggo', description: '$2.500,00', image: Muggo },
  { title: 'Syltherine', description: '$2.500,00', image: Sy },
  { title: 'Leviosa', description: '$2.500,00', image: Loli },
  { title: 'Lolito', description: '$7.000,00', image: ImageCard },
  { title: 'Respira', description: '$500,00', image: Resp },
];

const CardOption: React.FC = () => {
  const { addToCart } = useCart();

  // 🔁 Recebe todos os dados e envia ao contexto
 const handleAddToCart = (title: string, image: string, price: string) => {
  addToCart({ title, image, price });
  alert(`${title} adicionado ao carrinho!`);
};

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CardOption;
