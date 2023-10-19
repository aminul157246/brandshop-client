import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import {FcRating} from 'react-icons/fc'

const BrandDetails = () => {


    const [products , setProducts] = useState([])
    const [detail, setDetail] = useState([]);


  const { brandName } = useParams();

  const details = useLoaderData();


  useEffect(() => {
    const findDetails = details.find((prod) => prod.title == brandName);
    // const findDetails = details.find((prod) => prod.id== id);
    fetch(`http://localhost:3000/products/findDetails.title`) 
    setDetail(findDetails);
    setProducts(findDetails)

  }, [brandName, details]);


useEffect(()=> {
    fetch('http://localhost:3000/products/brandName')
    .then(res => res.json())
    .then(data => setProducts(data))
},[products])

    return (
        <div className="max-w-7xl mx-auto">
            {/* slide  */}
            <div>
            <div className="carousel w-full">
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
    <h2>Product : {products.length} </h2>
    {/* <h2>Product name : {products.name} </h2> */}

    
</div>

            </div>
    );
};

export default BrandDetails;


















// <div>
    
//     <div className="grid grid-cols-2 gap-8 mt-8" >







//       <div className="  flex   bg-base-100 shadow-xl">
// <figure><img className="w-[320px] h-[350px]" src={detail.car_img_1} alt="Shoes" /></figure>
// <div className="bg-gray-500 space-y-4 w-[320px] h-[350px]  p-4 ">
//  <h2 className="text-2xl font-bold  text-gray-200 ">{detail.name_1}</h2>
//  <div className="grid grid-cols-2 gap-4">
//  <h2 className="text-2xl font-semibold text-gray-200 ">{detail.brand_name_1}</h2>
//  <h2 className="text-2xl font-semibold text-gray-200">{detail.type_1}</h2>
//  </div>
 

//  <p className="text-xl text-gray-300 ">{detail.des_1}</p>

//  <div className="grid grid-cols-2 text-center">
//  <h2 className="text-2xl font-bold text-gray-50 ">${detail.price_1}</h2>
//  <div className="flex items-center gap-2">
//  <FcRating className="text-2xl"></FcRating>
//  <h2 className="text-2xl font-bold text-gray-50 "> {detail.rating_1}</h2>
//  </div>
//  </div>

//  <div className="flex justify-evenly ">
//    <button className="bg-white rounded-3xl py-2 px-4 ">Details</button>
//    <button className="bg-white rounded-3xl py-2 px-4 ">Update</button>
//  </div>
// </div>
//      </div>









//       <div className="  flex   bg-base-100 shadow-xl">
// <figure><img className="w-[320px] h-[350px]" src={detail.car_img_2} alt="Shoes" /></figure>
// <div className="bg-gray-500 space-y-4 w-[320px] h-[350px]  p-4 ">
//  <h2 className="text-2xl font-bold  text-gray-200 ">{detail.name_2}</h2>
//  <div className="grid grid-cols-2 gap-4">
//  <h2 className="text-2xl font-semibold text-gray-200 ">{detail.brand_name_2}</h2>
//  <h2 className="text-2xl font-semibold text-gray-200">{detail.type_2}</h2>
//  </div>
 

//  <p className="text-xl text-gray-300 ">{detail.des_2}</p>

//  <div className="grid grid-cols-2 text-center">
//  <h2 className="text-2xl font-bold text-gray-50 ">${detail.price_2}</h2>
//  <div className="flex items-center gap-2">
//  <FcRating className="text-2xl"></FcRating>
//  <h2 className="text-2xl font-bold text-gray-50 "> {detail.rating_2}</h2>
//  </div>
//  </div>

//  <div className="flex justify-evenly ">
//    <button className="bg-white rounded-3xl py-2 px-4 ">Details</button>
//    <button className="bg-white rounded-3xl py-2 px-4 ">Update</button>
//  </div>
// </div>
//      </div>
        
//     </div>
//     <div className="grid grid-cols-2 gap-8 my-8" >





//       <div className="  flex   bg-base-100 shadow-xl">
// <figure><img className="w-[320px] h-[350px]" src={detail.car_img_3} alt="Shoes" /></figure>
// <div className="bg-gray-500 space-y-4 w-[320px] h-[350px]  p-4 ">
//  <h2 className="text-2xl font-bold  text-gray-200 ">{detail.name_3}</h2>
//  <div className="grid grid-cols-2 gap-4">
//  <h2 className="text-2xl font-semibold text-gray-200 ">{detail.brand_name_3}</h2>
//  <h2 className="text-2xl font-semibold text-gray-200">{detail.type_3}</h2>
//  </div>
 

//  <p className="text-xl text-gray-300 ">{detail.des_3}</p>

//  <div className="grid grid-cols-2 text-center">
//  <h2 className="text-2xl font-bold text-gray-50 ">${detail.price_3}</h2>
//  <div className="flex items-center gap-2">
//  <FcRating className="text-2xl"></FcRating>
//  <h2 className="text-2xl font-bold text-gray-50 "> {detail.rating_3}</h2>
//  </div>
//  </div>

//  <div className="flex justify-evenly ">
//    <button className="bg-white rounded-3xl py-2 px-4 ">Details</button>
//    <button className="bg-white rounded-3xl py-2 px-4 ">Update</button>
//  </div>
// </div>
//      </div>
//       {/* 1  */}
//       <div className="  flex   bg-base-100 shadow-xl">
// <figure><img className="w-[320px] h-[350px]" src={detail.car_img_4} alt="Shoes" /></figure>
// <div className="bg-gray-500 space-y-4 w-[320px] h-[350px]  p-4 ">
//  <h2 className="text-2xl font-bold  text-gray-200 ">{detail.name_4}</h2>
//  <div className="grid grid-cols-2 gap-4">
//  <h2 className="text-2xl font-semibold text-gray-200 ">{detail.brand_name_4}</h2>
//  <h2 className="text-2xl font-semibold text-gray-200">{detail.type_2}</h2>
//  </div>
 

//  <p className="text-xl text-gray-300 ">{detail.des_4}</p>

//  <div className="grid grid-cols-2 text-center">
//  <h2 className="text-2xl font-bold text-gray-50 ">${detail.price_4}</h2>
//  <div className="flex items-center gap-2">
//  <FcRating className="text-2xl"></FcRating>
//  <h2 className="text-2xl font-bold text-gray-50 "> {detail.rating_4}</h2>
//  </div>
//  </div>

//  <div className="flex justify-evenly ">
//    <button className="bg-white rounded-3xl py-2 px-4 ">Details</button>
//    <button className="bg-white rounded-3xl py-2 px-4 ">Update</button>
//  </div>
// </div>
//      </div>
        
//     </div>
// </div>


