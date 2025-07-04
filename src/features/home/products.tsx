import React from 'react';
import ImageCard from '../../assets/img/card.svg';
import Sy from '../../assets/img/sy.svg';
import Loli from '../../assets/img/loli.svg';
import Resp from '../../assets/img/resp.svg';
import Grifo from '../../assets/img/grifo.svg';
import Muggo from '../../assets/img/muggo.svg';

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-2xl overflow-hidden rounded-md">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2  text-[#35322d]">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const cardData = [
  { title: 'Syltherine', description: '$2.500,00', image: Sy },
  { title: 'Leviosa', description: '$2.500,00', image: Loli },
  { title: 'Lolito', description: '$7.000,00', image: ImageCard },
  { title: 'Respira', description: '$500,00', image: Resp },
  { title: 'Grifo', description: '$2.500,00', image: Grifo },
  { title: 'Muggo', description: '$2.500,00', image: Muggo },
];

const CardList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
