import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct  = ( ) => {

  const {id} = useParams()

    const handleUpdateProduct  = event => {
        event.preventDefault()



      
    
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const type = form.type.value
        const price = form.price.value
        const shortDes = form.shortDes.value;
        const rating = form.rating.value
        const newProduct  = {name, brandName,type,price,shortDes,rating,photo}
        console.log(newProduct );
    
      // send data in server from here
      fetch(` https://brand-shop-server-ij2rekxmp-aminul-islams-projects.vercel.app/product/brandName/${id}`, {
        method : 'PUT', 
        headers : {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(newProduct )
      })
    
      
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount>0){
          Swal.fire({
            title: 'Success!',
            text: 'Product  added successfully.  😻 ',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
    
        
      }
    
    
    
    




    return (
        <div className=' p-8 max-w-7xl mx-auto ' >
        <h2 className='text-5xl font-bold my-4'>Update Product : </h2>
    
    
        <form onSubmit={handleUpdateProduct }>
          {/* form row  2*/}
          <div className='lg:flex justify-center gap-8'>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder=" Name" defaultValue={name} className="input input-bordered" name="name" required />
            </div>
    
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input type="text" placeholder="Brand Name" className="input input-bordered" name="brandName" required />
            </div>
          </div>
    
          {/* form row  3*/}
          <div className='lg:flex justify-center gap-8'>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input type="text" placeholder="Type" className="input input-bordered" name="type" required />
            </div>
    
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" placeholder="Price" className="input input-bordered" name="price" required />
            </div>
          </div>
    
          {/* form row  4*/}
          <div className='lg:flex justify-center gap-8'>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input type="text" placeholder="Short Description" className="input input-bordered" name="shortDes" required />
            </div>
    
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="text" placeholder="Rating" className="input input-bordered" name="rating" required />
            </div>
    
    
          </div>
    
          
            {/* single row  */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo" required />
            </div>
            <div className='lg:flex justify-center'>
              <button className="btn  mt-4">
                Update Product  
              </button>
            </div>
        </form>
        </div >
    );
};

export default UpdateProduct ;