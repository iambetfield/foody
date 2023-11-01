import { IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const CartItem = () => {
  return (
    <div className='px-5'>
       
        <div className='flex items-center space-x-5'>
            <div>
                <img className='w-[5rem] h-[5rem] object-cover rounded' 
                src='https://images.pexels.com/photos/8951038/pexels-photo-8951038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                />
            </div>
            <div className='flex items-center justify-between w-[80%]'>
                <div className='space-y-1 lg:space-y-3 w-full'>
                    <p className='text-gray-300 pl-3'>Sashimi</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center text-center space-x-1'>
                            <IconButton color='primary'>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <div className='w-5 h-5 text-xs'>
                                5
                            </div>
                            <IconButton color='primary'>
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            <p className='font-semibold text-2xl'>$2090</p>
            <div className='pl-5'>
                <IconButton color='primary'>
                    <HighlightOffIcon />
                </IconButton>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default CartItem