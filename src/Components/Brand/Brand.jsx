import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { id, title, image } = brand;
  return (
    <Link to={`/brandDetails/${title}`}>
      <div className="max-w-7xl mx-auto ">
        <div className="rounded-lg">
          <img className="w-[220px] h-[200px]" src={image} alt="" />
          <div className="bg-gray-900 ">
            <h2 className="text-3xl text-center p-2 text-white">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
