import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Product = ({product}) => {



    const {_id, card_img} = product;




    
    const [detail, setDetail] = useState([]);

  const { id } = useParams();
//   console.log(id);

  const details = useLoaderData();
  console.log(details);




  useEffect(() => {
    const findDetails = details.find((phone) => phone.id == id);
    setDetail(findDetails);
  }, [id, details]);
  console.log(detail);










    return (
        <div>
            {_id}
            {
                <img src={card_img} alt="" />
            }
        </div>
    );
};

export default Product;