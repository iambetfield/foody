import { Card, IconButton } from "@mui/material";

import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface RestaurantProps {
  item: any;
  index: number;
}

const RestaurantCard = ({ item, index }: RestaurantProps) => {
  const navigate = useNavigate();
  const handleAddToFavorites = () => {
    console.log("agregamos a favoritos");
  };

  return (
    <Card className="m-3 w-[10rem] h-[10rem]  sm:w-[18rem] sm:h-[16rem] productCard pb-1">
      <div onClick={() =>navigate(`/restaurant/${item.city}/${item.name}/${index+1}`)} >
        <img  
          src={item.imageUrl}
          className="w-full h-[6rem] sm:h-[10rem] rounded-t-md object-cover cursor-pointer"
          alt=""
        />
      </div>
      <div className="p-2 textPart flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-sembibold text-sm sm:text-lg">{item.name}</p>
          <p className="text-gray-500 text-sm hidden sm:block">
            {item.description.length > 40
              ? item.substring(0, 40) + "..."
              : item.description}
          </p>
        </div>
        <div className="flex justify-end">
          <IconButton onClick={handleAddToFavorites}>
            {index % 2 === 0 ? (
              <FavoriteIcon color="primary" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
