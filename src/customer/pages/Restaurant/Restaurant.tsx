import { Card, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { useState } from 'react'
import MenuItemCard from './MenuItemCard';

const categories = [
    "Sushi",
    "Rolls",
    "Starters",
    "Sashimis",
    "Niguiris",
    "Ramen",
    "Woks"
]

const foodType=["Vegetariano", "Todo"];
const menu = [1,1,1,1,1,1];

const Restaurant = () => {

const [selectedCategory, setSelectedCategory] = useState("");
const [selectedFoodType, setSelectedFoodType] = useState("");

const handleCategoryChange = ()=> {
    setSelectedCategory("");
    console.log("selected Category: ", selectedCategory);
}

const handleFoodTypeChange = () => {
    setSelectedFoodType("");
    console.log("selected FoodType: ", selectedFoodType);
}

  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>
                {`Home / Rosario / Dashi Sushi / 2 / Order Online`}
            </h3>
            <div>
                <img className='h-[40vh] w-[100%] object-cover' src='https://www.lewisginter.org/wp-content/uploads/2018/04/sushi-2853382_1920-Banner-Crop.jpg' alt=''/>
            </div>
            <div>
                <h1 className='text-4xl py-1 font-semibol'>{`Dashi Sushi`}</h1>
                <p className='text-gray-500'>           
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore pariatur explicabo autem molestias tempore alias sint quia praesentium porro voluptate?
                </p>
                <p className='py-3 text-orange-300'>Abierto ahora 10:30 am - 00:00</p>
            </div>
        </section>
        <Divider />
        <section className='pt-[2rem] lg:flex relative pb-[2rem]'>
            <div className='space-y-10 lg:w-[20%]'>
                <Card className='space-y-5 lg:sticky top-28 p-5'>
                    <div>
                        <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                            Category
                        </Typography>
                        <FormControl component={"fieldset"}>
                            <RadioGroup name='category' value={selectedCategory} onChange={handleCategoryChange}>
                            {categories.map((item:any, index:any)=>
                            <FormControlLabel 
                            key={index}
                            value={item}
                            control={<Radio />}
                            label={item}
                            sx={{color:"gray"}}
                            />
                            )}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider />   
                    <div>
                        <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                            FoodType
                        </Typography>
                        <FormControl component={"fieldset"}>
                            <RadioGroup name='Tipo de Comida' value={selectedFoodType} onChange={handleFoodTypeChange}>
                            {foodType.map((item:any, index:any)=>
                            <FormControlLabel 
                            key={index}
                            value={item}
                            control={<Radio />}
                            label={item}
                            sx={{color:"gray"}}
                            />
                            )}
                            </RadioGroup>
                        </FormControl>
                    </div>             
                </Card>
            </div>

            <div className='lg:w-[80%] space-y-5 lg:pl-1 mt-5'>
                {menu.map((item:any)=>
                <MenuItemCard item={item}/>
                )}
            </div>

        </section>
       
    </div>
  )
}

export default Restaurant