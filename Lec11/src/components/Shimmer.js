const Shimmer=()=>{
    return(
        <div className="bg-red-600">
            {Array(20).fill("").map((e,index)=><div key={index}  className="bg-red-600"></div>)}
        </div>
    );
}
export default Shimmer;