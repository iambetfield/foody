


interface CarrouselProps {
    image: any,
    title: string
}
const CarrouselItem = ({image, title}: CarrouselProps) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img className=' w-[4rem] h-[4rem] lg:w-[12rem] lg:h-[12rem] min-w-[4rem] rounded-full object-cover object-center opacity-90' src={image} alt=""/>
        <span className='py-5 font-sembibold lg:text-xl text-gray-300 text-sm'>{title}</span>
        
    </div>
  )
}

export default CarrouselItem