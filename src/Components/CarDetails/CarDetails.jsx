import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const items = useLoaderData();
  console.log(items);
  return (
    <div>
  
      <div className="card   bg-base-100 shadow-xl">
  <figure><img className="w-[600px] h-[400px]" src={items.photo} alt="Shoes" /></figure>
  <div className="card-body ">
  <h2 className="text-2xl text-center font-bold"> Type : {items.type}</h2>

  <div className="flex justify-center gap-24">
  <h2 className="text-2xl text-center"> Name :  {items.name} </h2>
  <h2 className="text-2xl text-center">  Brand Name : {items.brandName} </h2>
  </div>
  <div className="flex justify-center gap-24">
  <h2 className="text-2xl"> Price :  ${items.price } </h2>
  <h2 className="text-2xl"> Rating :  {items.rating} </h2>
  </div>
    <p className="text-center">{items.shortDes}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-accent">Add Cart</button>
    </div>
  </div>
</div>







    </div>
  );
};

export default CarDetails;
