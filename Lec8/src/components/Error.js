import { useRouteError } from "react-router-dom";

const Error= () => {
    const err=useRouteError();
    console.log(err); 
    return (
        <div>
            <h3>Oops Something Wrong:::</h3>
        </div>
    );
}
export default Error;