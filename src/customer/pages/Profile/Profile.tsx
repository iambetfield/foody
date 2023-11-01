import ProfileNav from './ProfileNav'
import { Divider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'
import Orders from './Orders'
import UserAddresses from './UserAddresses';
import Favorites from './Favorites'
import UserPayment from './UserPayment'

const Profile = () => {
  return (
    <div className='sm:flex'>
        <div className='sm:w-[30%] hidden sm:block'>
            <ProfileNav />

        </div>
        <Divider orientation='vertical' flexItem/>
        <div className='sm:w-[80%]'>
            <Routes>
                <Route path="/" element={<UserProfile />} />
                <Route path="/orders" element={<Orders/>} />
                <Route path="/addresses" element={<UserAddresses />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/payments" element={<UserPayment />} />   
            </Routes>

        </div>


    </div>
  )
}

export default Profile