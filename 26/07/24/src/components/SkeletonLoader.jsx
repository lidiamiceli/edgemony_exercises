import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="p-6">
      <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-32 bg-gray-300 rounded"></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
