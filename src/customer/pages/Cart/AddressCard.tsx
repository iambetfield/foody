import { Button, Card } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

interface AddressCardProps {
    item:any,
    handleSelectedAddress: any,
    showButton: any
}


const AddressCard = ({handleSelectedAddress, item, showButton} : AddressCardProps) => {

    const handleSelectAddress = ()=> {
        console.log("handle Select Address")
    }


  return (
    <Card className='flex space-x-5 lg:w-64 m-5 p-5'>
        <HomeIcon />
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Home</h1>
            <p> Tomas de la Torre 17, Funes, Santa Fe</p>

            {showButton && <Button
            variant='outlined'
            fullWidth
            onClick={()=> handleSelectedAddress(item)}>
                select</Button>}

        </div>
    </Card>
  )
}

export default AddressCard