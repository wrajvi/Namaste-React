import { useParams } from "react-router-dom";
import { useEffect ,useState} from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [menu,setMenu]=useState(null);
    const params=useParams();
    const {id}=params;
    // console.log(params);

    useEffect( () => {
       getRestaurantInfo();
    },[]

    );
    async function getRestaurantInfo() {
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.915389606436783&lng=80.94339955598116&restaurantId=" + id);
        const json= await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[0]?.card?.card?.info);
    }
    
return !menu?<Shimmer/>:(
    <div>
        <h1>Restaurant ID {menu.id}</h1>
        <h1>{menu.name}</h1>
        <img alt="img" src={IMG_CDN_URL + menu.cloudinaryImageId}/>
    </div>
);
}
 export default RestaurantMenu;