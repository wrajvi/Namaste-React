import {IMG_CDN_URL} from "../constants"
const RestaurantCard=({name,cloudinaryImageId,cuisines,lastMileTravelString}
    ) =>{
    return (
      
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-100">
      <img alt="img" src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      </div>
    );

};
export default RestaurantCard;