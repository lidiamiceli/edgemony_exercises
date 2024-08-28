import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, date }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img
        alt={title}
        src={imageUrl}
        className="h-56 w-full object-cover"
      />
      <div className="bg-white p-4 sm:p-6">
        <time dateTime={date} className="block text-xs text-gray-500">
          {new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
        </time>
        <a href="#">
          <h3 className="mt-1 text-lg text-gray-900">{title}</h3>
        </a>
        <p className="mt-2 line-clamp-3 text-sm text-gray-500">
          {description}
        </p>
      </div>
    </article>
  );
};

export default Card;


