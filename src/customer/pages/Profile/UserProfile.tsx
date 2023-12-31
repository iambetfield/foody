import { AccountCircleOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'


const UserProfile = () => {
const handleLogout= ()=> {
  console.log("handle logout")
}

  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
      <div className='flex flex-col items-center justify-center'>
        <AccountCircleOutlined sx={{fontSize: "9rem"}}/>
        <h1 className='py-5 text-2xl font-semibold'>Victoria Alvarez Dito</h1>
        <p>Email: {"vickynuni@gmail.com"}</p>
        <Button variant='contained' sx={{margin: "2rem 0rem"}}
        onClick={handleLogout}
        >Cerrar cesión</Button>

      </div>


    </div>
  )
}

export default UserProfile