import React from 'react';
import Quality from '../../assets/img/quality].svg';
import Protection from '../../assets/img/protection.svg';
import Shipping from '../../assets/img/shipping.svg';
import Suport from '../../assets/img/suport.svg';

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-md shadow-sm w-full">
      <img src={image} alt={title} className="w-[55px] h-[60px] object-contain" />
      <div>
        <h2 className="text-lg font-bold mb-1  text-[#35322d]">{title}</h2>
        <p className="text-[#898989] text-sm">{description}</p>
      </div>
    </div>
  );
};

const cardData = [
  {
    title: 'High Quality',
    description: 'crafted from top materials',
    image: Quality,
  },
  {
    title: 'Warranty Protection',
    description: 'Over 2 years',
    image: Protection,
  },
  {
    title: 'Free Shipping',
    description: 'Order over 150 $',
    image: Shipping,
  },
  {
    title: '24 / 7 Support',
    description: 'Dedicated support',
    image: Suport,
  },
];

const CardShop: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default CardShop;
