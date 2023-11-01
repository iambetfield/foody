import { Button, Card } from '@mui/material'


interface MenuItemProps {
    item: any
}

const MenuItemCard = ({item}: MenuItemProps) => {

    const handleAddItemToCart = () => {
        console.log("Handle Add Itme to Cart");
    }


  return (
    <Card className='p-3 lg:flex items-center justify-between box'>
        <div className='lg:flex items-center lg:space-x-5'>
            <img className='w-[7rem] h-[7rem] object-cover' src='https://images.pexels.com/photos/8951038/pexels-photo-8951038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                <p className='font-semibold text-xl'>{`Sashimi`}</p>
                <p>${item.price}</p>
                <p className='text-gray-400'>{`Salmon Rosado`}</p>
            </div>
        </div>
        <div>
            <Button onClick={handleAddItemToCart} variant='contained'>Agregar</Button>
        </div>
        
    </Card>
  )
}

export default MenuItemCard