import { useEffect, useState } from "react";
import {   useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";
// import {FcRating} from 'react-icons/fc'

const BrandDetails = () => {


    const [products , setProducts] = useState([])
    const [detail, setDetail] = useState([]);


  const { brandName } = useParams();

  const details = useLoaderData();


  useEffect(() => {
    const findDetails = details.find((prod) => prod.title == brandName);
    // const findDetails = details.find((prod) => prod.id== id);
    fetch(` https://brand-shop-server-ij2rekxmp-aminul-islams-projects.vercel.app/products/findDetails.title`) 
    setDetail(findDetails);
    // setProducts(findDetails)

  }, [brandName, details]);


useEffect(()=> {
    fetch(` https://brand-shop-server-ij2rekxmp-aminul-islams-projects.vercel.app/products/${brandName}`)
    .then(res => res.json())
    .then(data => setProducts(data))
},[brandName,products])

    return (
        <div className="max-w-7xl mx-auto">
            {/* slide  */}
            <div>
            <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    
<div className="hero min-h-screen" style={{backgroundImage: `url(${detail.slider_img_1})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" ">
    <div >
      <h1 className="mb-5 text-5xl font-bold text-white">Surprising Offer ...! </h1>
      <p className="mb-5 text-white">
Get ready to hit the road with our exclusive car offer! Unleash the thrill <br /> of driving with unbeatable deals on a wide range of stylish and reliable vehicles</p>
      <button className="bg-white rounded-3xl py-2 px-4">Buy Now !</button>
    </div>
  </div>
</div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    
<div className="hero min-h-screen" style={{backgroundImage: `url(${detail.slider_img_2})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" ">
    <div >
      <h1 className="mb-5 text-5xl font-bold text-white">Surprising Offer ...! </h1>
      <p className="mb-5 text-white">
Get ready to hit the road with our exclusive car offer! Unleash the thrill <br /> of driving with unbeatable deals on a wide range of stylish and reliable vehicles</p>
      <button className="bg-white rounded-3xl py-2 px-4 ">Buy Now !</button>
    </div>
  </div>
</div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    
<div className="hero min-h-screen" style={{backgroundImage: `url(${detail.slider_img_3})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" ">
    <div >
      <h1 className="mb-5 text-5xl font-bold text-white">Surprising Offer ...! </h1>
      <p className="mb-5 text-white">
Get ready to hit the road with our exclusive car offer! Unleash the thrill <br /> of driving with unbeatable deals on a wide range of stylish and reliable vehicles</p>
      <button className="bg-white rounded-3xl py-2 px-4">Buy Now !</button>
    </div>
  </div>
</div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    
<div className="hero min-h-screen" style={{backgroundImage: `url(${detail.slider_img_4})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" ">
    <div >
      <h1 className="mb-5 text-5xl font-bold text-white">Surprising Offer ...! </h1>
      <p className="mb-5 text-white">
Get ready to hit the road with our exclusive car offer! Unleash the thrill <br /> of driving with unbeatable deals on a wide range of stylish and reliable vehicles</p>
      <button className="bg-white rounded-3xl py-2 px-4">Buy Now !</button>
    </div>
  </div>
</div>


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div >




<div>
    {/* <h2>Product : {products.length} </h2> */}
    <div className=" grid grid-cols-1 lg:grid-cols-4  gap-6 ">
    {
      products.map(product => <Details key={product._id} product={product}></Details>)
    }
    </div>

    
</div>

            </div>
    );
};

export default BrandDetails;
