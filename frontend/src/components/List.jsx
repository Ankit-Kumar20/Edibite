import React from 'react';
import Restaurant from '../components/Restaurant';
import Card from '../components/Card';
import SmallCard from '../components/SmallCard';

function List() {
  return (
    <div className='flex flex-wrap justify-center gap-10 md:gap-24 mx-4 md:mx-10'>
      {Restaurant.map((restaurant, idx) => (
        <React.Fragment key={idx}>
          <div className='hidden md:block'>
            <Card
              discount={restaurant.discount} 
              name={restaurant.name} 
              category={restaurant.category} 
              image={restaurant.image} 
            />
          </div>
          <div className='md:hidden block'>
            <SmallCard
              discount={restaurant.discount} 
              name={restaurant.name} 
              category={restaurant.category} 
              image={restaurant.image}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default List;