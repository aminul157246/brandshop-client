import { Link } from "react-router-dom";

const Brand = ({brand}) => {



    const {id,title, image} = brand
    return (
        <Link to={`/brandDetails/${title}`}>
            <div > 
            
            

            <div  >
  <img className="w-[200px] h-[200px]" src={image} alt="" />
  <div  >
  <h2 className="text-3xl text-center">{title}</h2>
  </div>
</div>








        </div>
        </Link>
    );
};

export default Brand;