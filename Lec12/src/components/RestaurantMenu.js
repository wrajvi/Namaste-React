import { useParams } from "react-router-dom";
import { useEffect ,useState} from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../../utils/useRestaurant";
const RestaurantMenu = () => {
    
    const params=useParams();
    const { resID }=params;
 
    const restaurant=useRestaurant(resID);
   
    
    
return !restaurant?<Shimmer/>:(
    <div>
        <h1>Restaurant ID {restaurant.id}</h1>
        <h1>{restaurant.name}</h1>
        <img alt="img" src={IMG_CDN_URL +restaurant.cloudinaryImageId}/>
    </div>
);
}
 export default RestaurantMenu;