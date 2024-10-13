import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import useAuth from "../../CustomHooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useCartItem from "../../CustomHooks/useCartItem";

const ProductDetails = () => {
  const product = useLoaderData();
  const { img, name, price, discount_price, quantity,_id } = product;
  const [buyingQuantity, setBuyingQuantity] = useState(1);
  const{user} = useAuth();
  const navigate = useNavigate();
  const location= useLocation();
  const [refetch] = useCartItem();
  // const from = location.state?.from?.pathname || '/';


  const handleAddToCart= (item) =>{
    navigate('/dashboard/carts')

    if(user && user.email){
     const cartItem ={
      menuId: _id,
      name:name,
      price:price,
      img,
       email: user.email,
       quantity:quantity
     }
    axios.post('http://localhost:5000/carts', cartItem)
     .then(res=>{
      console.log(res.data);
       if(res.data.insertedId){
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to the cart`,
          showConfirmButton: false,
          timer: 1500
        });
       
        //  refetch cart to count item
        refetch()
      }
      })
    }
      else{
        Swal.fire({
          title: "Please, login!",
          text: "login ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "login now!"
        })
        .then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from:location}})
          }
        });
        
      }
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <PhotoProvider>
              <PhotoView src={img}>
                <img
                  src={img}
                  className="img-fluid w-100"
                  alt="Plant"
                  style={{ objectFit: "cover" }}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="py-2">
              <h2>{name}</h2>
              <div className="d-flex gap-3 align-items-center my-2">
                <p className="card-text fs-4 fw-bold mb-0">
                  <span>Price: </span>${parseFloat(discount_price).toFixed(2)}
                </p>
                <p className="card-text fs-5 text-decoration-line-through">
                  ${parseFloat(price).toFixed(2)}
                </p>
              </div>

              <p>
                Availability: <span className="fw-semibold">{quantity} In Stock</span>
              </p>

              <p>
                The EcoSmart Fleece Hoodie full-zip hooded jacket provides
                medium weight fleece comfort all year around. Feel better in
                this sweatshirt because Hanes keeps plastic bottles of landfills
                by using recycled polyester.7.8 ounce fleece sweatshirt made
                with up to 5 percent polyester created from recycled plastic.
              </p>
              <div className="my-3">
                <p>Quantity:</p>
                <FaMinus
                  onClick={() => setBuyingQuantity(buyingQuantity - 1)}
                  style={{ cursor: "pointer" }}
                />
                <input
                  type="number"
                  name="quantity"
                  defaultValue={buyingQuantity}
                  value={buyingQuantity}
                  className="text-center mx-4"
                />
                <FaPlus
                  onClick={() => setBuyingQuantity(buyingQuantity + 1)}
                  className=""
                  style={{ cursor: "pointer" }}
                />
              </div>
              <button onClick={handleAddToCart} className="btn btn-green-black w-75">Add To Card</button>
              <button className="btn btn-black w-75 mt-3">Buy It Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
