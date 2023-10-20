import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";
import banner from '../../assets//images/bb.jpg'
import Contact from "./Contact";
const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <div className="max-w-7xl mt-12 mx-auto">


<div className="hero min-h-screen" style={{backgroundImage: `url(${banner}`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="text-left">
      <h1 className="mb-5 text-5xl font-bold">Need a car?</h1>
      <p className="mb-5 ">We sell a diverse range of vehicles, catering to various preferences and needs. From fuel-efficient compact cars to rugged <br /> SUVs and high-performance   sports cars, they offer innovative designs, cutting-edge technology, and safety features.  <br />Customers can choose from new and used models,  and many companies provide financing, warranty options, and extensive <br /> dealership networks for convenient sales and support</p>
      <button className="bg-white text-black px-4 py-2 rounded-3xl">More..</button>
    </div>
  </div>
</div>
            {/* <h3>brands  : {brands.length} </h3> */}

            <div className="grid grid-cols-6 my-12 gap-8">
            {
                brands.map(brand => <Brand key={brand._id} brand={brand}></Brand> )
            }
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;