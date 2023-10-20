import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";
import banner from '../../assets//images/bb.jpg'
import Contact from "./Contact";
const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <div className=" max-w-7xl mt-12 mx-auto">


<div className="hero " style={{backgroundImage: `url(${banner}`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="    text-neutral-content">
    <div className="text-left  p-12">
      <h1 className="mb-5 text-xl  lg:text-5xl font-bold">Need a car?</h1>
      <p className="mb-5 ">We sell a diverse range of vehicles, catering to various preferences and needs. From fuel-efficient compact cars to rugged <br /> SUVs and high-performance   sports cars, they offer innovative design</p>
      <button className="bg-white text-black px-4 py-2 rounded-3xl">More..</button>
    </div>
  </div>
</div>

            <div className="grid grid-cols-1 lg:grid-cols-6 my-12 gap-8">
            {
                brands.map(brand => <Brand key={brand._id} brand={brand}></Brand> )
            }
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;