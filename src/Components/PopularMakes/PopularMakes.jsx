import audi1 from "../../assets/images/audi1.jpg";
import audi2 from "../../assets/images/audi2.jpg";
import audi3 from "../../assets/images/audi3.jpg";

const PopularMakes = () => {
  return (
       <div className="max-w-7xl mx-auto mt-12">
         <h2 className="text-4xl font-bold mb-12">Popular Makes</h2>
    <div className="grid grid-cols-1  md:grid-cols-3 max-w-7xl mx-auto gap-12 mb-12">
      {/* card1  */}
      <div className="  rounded-xl  bg-base-100  ">
        <img src={audi1} alt="Shoes" />
        <div className="card-body bg-[#222732]">
          <p className="text-white">
            Ferrari Portofino 2-door convertible red ....
          </p>
          <h2 className="card-title text-white ">$14,400</h2>

          <div className="flex gap-4 border-t-2 py-4">
            <p className="text-white bg-rose-400 p-2 text-center rounded-lg'">2023</p>
            <p className="text-white">70,000 miles</p>
            <p className="text-white">Semi-Automatic</p>
          </div>

        </div>
      </div>
      {/* card1  */}
      <div className="card   bg-base-100 ">
        <img src={audi2} alt="Shoes" />
        <div className="card-body bg-[#222732]">
          <p className="text-white">Ferrari Portofino 2-door convertible red..</p>
          <h2 className="card-title text-white">$69,400</h2>
          <div className="flex gap-4 border-t-2 py-4">
            <p className="text-white bg-rose-400 p-2 text-center rounded-lg'">2023</p>
            <p className="text-white">80,000 miles</p>
            <p className="text-white">Semi-Automatic</p>
          </div>
          </div>
      </div>
      {/* card1  */}
      <div className="card  bg-base-100 ">
        <img src={audi3} alt="Shoes" />
        <div className="card-body bg-[#222732]">
          <p className="text-white">Ferrari Portofino 2-door convertible red...</p>
          <h2 className="card-title text-white">$14,400</h2>
          <div className="flex gap-4 border-t-2 py-4">
            <p className="text-white bg-rose-400 p-2 text-center rounded-lg'">2023</p>
            <p className="text-white">50,000 miles</p>
            <p className="text-white">Semi-Automatic</p>
          </div>
          </div>
      </div>
    </div>
       </div>
  );
};

export default PopularMakes;
