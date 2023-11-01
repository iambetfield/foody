import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import AccountBalanceWallteIcon from '@mui/icons-material/AccountBalanceWallet'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'


const menu = [
    {title: "Mis Pedidos", url:"orders", icon: <ShoppingBagIcon />},
    {title: "Favoritos", url:"favorites", icon: <FavoriteIcon />},
    {title: "Direcciones", url:"addresses", icon: <HomeIcon />},
    {title: "Mis Pagos", url:"payments", icon: <AccountBalanceWallteIcon />},
    {title: "Cerrar cesión", url:"logout", icon: <LogoutIcon />},
]
const ProfileNav = () => {

const navigate = useNavigate();

const handleLogout = ()=> {
    console.log("handle logout")
}

const handleNavigate = (item:any)=> {
    navigate(`/myprofile/${item.url}`);
    if(item.url === "logout"){
        handleLogout();
        navigate("/");
    }

 
}

  return (
    <div className='group h-[90vh] flex flex-col justify-center text-xl space-y-8'>
     
        {menu.map((item)=><>
        <div 
            className='px-5 py-5 flex items-center space-x-5 cursor-pointer'
            onClick={()=>handleNavigate(item)} >
            {item.icon}
            <span>{item.title}</span>
        </div>
    
        </>)}
        

    </div>
  )
}

export default ProfileNav