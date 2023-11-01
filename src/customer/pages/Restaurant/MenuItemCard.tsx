import { Button, Card } from '@mui/material'


interface MenuItemProps {
    item: any
}

const MenuItemCard = ({item}: MenuItemProps) => {

    const handleAddItemToCart = () => {
        console.log("Handle Add Itme to Cart");
    }


  return (
    <Card className='p-3 lg:flex items-center'>
        <div className='flex items-center lg:space-x-5 w-[100%]'>
            <img className='w-[7rem] h-[7rem] rounded object-cover' src='https://images.pexels.com/photos/8951038/pexels-photo-8951038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl pl-3 w-[80%]'>
                <p className='font-semibold text-xl'>{`Sashimi`}</p>
                <p>${item.price}</p>
                <p className='text-gray-400'>{`Salmon Rosado`}</p>
            </div>
            <div className='pr-5'>
            <Button onClick={handleAddItemToCart} variant='contained'>Agregar</Button>
            </div>
        </div>
         
        
        
    </Card>
  )
}

export default MenuItemCard