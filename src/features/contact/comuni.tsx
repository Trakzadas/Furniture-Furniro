import React from 'react';
import Point from '../../assets/img/point.svg';
import Phone from '../../assets/img/phone.svg';
import Time from '../../assets/img/time.svg';

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="max-w-md w-full mx-auto flex items-start gap-4 p-4 rounded-md bg-white  mb-8">
      <img
        src={image}
        alt={title}
        className="w-7 h-7 object-contain mt-1 flex-shrink-0"
      />
      <div>
        <h2 className="text-xl font-bold mb-1  text-[#35322d]">{title}</h2>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const cardData = [
  {
    title: 'Address',
    description: '236 5th SE Avenue, New York NY10000, United States',
    image: Point,
  },
  {
    title: 'Phone',
    description: 'Mobile: +(84) 546-6789 Hotline: +(84) 456-6789',
    image: Phone,
  },
  {
    title: 'Working Time',
    description: 'Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00',
    image: Time,
  },
];

const CardComi: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardComi;
