import React from 'react'
import AddressCard from '../Cart/AddressCard';

const adressess = [1,1,1];

const UserAddresses = () => {
  return (
    <div className='flex items-center flex-col lg:px-10'>
      <h1 className='text-xl text-center py-7 font-semibold'>Mis Direcciones</h1>
    <div className='flex justify-center flex-wrap space-x-5'>
      {adressess.map((item:any)=><AddressCard item={item} showButton={false} handleSelectedAddress={""}/>)}

    </div>
    </div>
  )
}

export default UserAddresses