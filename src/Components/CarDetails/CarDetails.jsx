import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const items = useLoaderData();
  console.log(items);
  return (
    <div className="max-w-7xl mx-auto">
  
      <div className="card   bg-base-100 shadow-xl">
  <figure><img src={items.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> {items.name} </h2>
    <p>{items.shortDes}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add Cart</button>
    </div>
  </div>
</div>







    </div>
  );
};

export default CarDetails;
