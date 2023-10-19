
import { useLoaderData } from "react-router-dom";



const CarDetails = ( ) => {


const items = useLoaderData()
console.log(items);
    return (
        <div>
            <h3> {items.length}  </h3>
            {
                items.map(item=> <div key={item._id}>
                    <h3>{item.name}</h3>
                </div>)
            }
        </div>
    );
};

export default CarDetails;