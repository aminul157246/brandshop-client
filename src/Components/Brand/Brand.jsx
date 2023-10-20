import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Brand = ({ brand }) => {
  const {   title, image } = brand;
  return (
    <Link to={`/brandDetails/${title}`}>
      <div className="max-w-7xl mx-auto ">
        <div className="rounded-lg">
          <img className="w-full lg:w-[220px] h-[200px]" src={image} alt="" />
          <div className="bg-gray-900 ">
            <h2 className="text-xl lg:text-3xl text-center p-2 text-white">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};


Brand.propTypes = {
  brand: PropTypes.object,
}

export default Brand;
