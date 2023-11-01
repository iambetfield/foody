import { Button, Card } from '@mui/material'


interface OrderCardProps {
    item: any
}

const OrderCard = ({item}:OrderCardProps) => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img className='h-16 w-16'
            src='https://images.pexels.com/photos/8951038/pexels-photo-8951038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            <div>
                <p>{item.name}</p>
                <p className='text-gray-400'>$2990</p>
            </div>
        </div>
        
        <div>
            <Button variant='outlined'>Seguir</Button>
        </div>

    </Card>
  )
}

export default OrderCard