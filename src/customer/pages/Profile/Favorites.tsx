import React from 'react'
import RestaurantCard from '../Homepage/RestaurantCard';
import { restaurants } from '../../../types/types';



const Favorites = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'> Mis Locales Favoritos</h1>
      <div className='flex flex-wrap justify-center'>
        {restaurants.map((item:any, index:number)=> <RestaurantCard item={item} index={index}/>)}

      </div>

    </div>
  )
}

export default Favorites