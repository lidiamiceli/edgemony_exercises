import React from 'react';
import Card from './components/Card';

const Home: React.FC = () => {
  const cardsData = [
    {
      title: 'How to position your furniture for positivity',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      date: '2022-10-10',
    },
    {
      title: 'Matching colorful cushions with sofas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      imageUrl: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2022-11-15',
    },
    {
      title: 'The best houseplants',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1679921582421-f770b37cd4d5?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '2022-11-15',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-20">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Home;
