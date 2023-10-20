import { HiLocationMarker } from "react-icons/hi";
import { GiBackwardTime, GiPartyHat } from "react-icons/gi";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {
    return (
        <div>
            
     
      <h2 className="text-4xl mt-12 font-bold font-Vidaloka  text-center">Contact US </h2>
        <p className="text-gray-400 mt-4 text-center">CONTACT US ANY TIME</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-12 max-w-6xl mx-auto">
 
        <div className="card shadow-xl bg-gray-900 pt-4">
          <HiLocationMarker className="text-4xl text-white  ml-28"></HiLocationMarker>
          <div className="card-body">
            <h2 className="text-white card-title">Postal Address</h2>
            <p className="text-white">Unica Event Agency</p>
            <p className="text-white">85 Fentiman Ave</p>
            <p className="text-white">Ottawa, ON K1S 0T7</p>
          </div>
        </div>

        <div className="card shadow-xl bg-gray-900 pt-4">
          <AiTwotoneMail className="text-4xl text-white ml-28 "></AiTwotoneMail>
          <div className="card-body">
            <h2 className="text-white card-title">Phone & E-mail</h2>
            <p className="text-white">Phone: 1-800-64-38</p>
            <p className="text-white">Fax: 1-800-64-39</p>
            <p className="text-white" >office@fable.com</p>
          </div>
        </div>

        <div className="card shadow-xl bg-gray-900 pt-4">
          <GiBackwardTime className="text-4xl  text-white ml-28 "></GiBackwardTime>
          <div className="card-body">
            <h2 className="text-white card-title">Open Hours</h2>
            <p className="text-white">Monday - Friday</p>
            <p className="text-white">8.00 am - 5.00 pm</p>
            <p className="text-white">Weekend Closed</p>
          </div>
        </div>
 
        <div className="card shadow-xl bg-gray-900 pt-4">
          <GiPartyHat className="text-4xl text-white ml-28 "></GiPartyHat>
          <div className="card-body">
            <h2 className="text-white card-title">Sessions</h2>
            <p className="text-white">Mornings, 8 am - 12 noon</p>
            <p className="text-white">Afternoons, 1 pm - 5 pm</p>
            <p className="text-white">Full Day, 8 am - 5 pm</p>
          </div>
        </div>
      </div>

        </div>
    );
};

export default Contact;