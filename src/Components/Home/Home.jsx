import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";

const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    return (
        <div className="max-w-7xl mx-auto">
            <h3>brands  : {brands.length} </h3>

            <div className="grid grid-cols-6">
            {
                brands.map(brand => <Brand key={brand._id} brand={brand}></Brand> )
            }
            </div>
        </div>
    );
};

export default Home;