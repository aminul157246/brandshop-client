import { Link } from "react-router-dom";

const Details = ({product}) => {
    const {photo,_id, name} = product;
    console.log(_id);
    return (
        <div>
            <div className="card w-96 bg-base-100 h-96 mb-7 shadow-xl">
  <figure><img  src={ photo} alt="" /></figure>
  <div className="card-body">
  <h2> { name} </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <Link to={`/singleCarDetails/${ _id}`}><button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;