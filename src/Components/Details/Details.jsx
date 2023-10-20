import { Link } from "react-router-dom";

const Details = ({product}) => {
    const {photo,_id, name,brandName,type,shortDes,price, rating,} = product;
    // console.log(_id);
    return (
        <div className="max-w-7xl mx-auto my-12">
            <div className="card   bg-base-100    h-[500px]  shadow-xl">
   <img className="w-[320px] h-[180px]  "  src={ photo} alt="" /> 
  <div className="card-body">
  <div className="flex gap-24">
  <h2 className="text-2xl">  { name} </h2>
  <h2 className="text-2xl">  { brandName} </h2>
  </div>
  <h2 className="text-2xl">{type}</h2>
  <div className="flex gap-24">
  <h2 className="text-2xl"> ${price } </h2>
  <h2 className="text-2xl"> { rating} </h2>
  </div>
    <p>{shortDes}</p>
    <div className="card-actions justify-center">
      <Link to={`/singleCarDetails/${ _id}`}><button className="bg-black text-white px-4 py-2 rounded-3xl">Details</button></Link>
      <Link to={`/updateProduct`}><button className="bg-black text-white px-4 py-2 rounded-3xl">Update</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;