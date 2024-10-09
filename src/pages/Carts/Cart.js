
import { Link } from "react-router-dom";
import useCartItem from "../../CustomHooks/useCartItem";

const Cart = () => {
    const [cart, refetch] = useCartItem();
    const totalPrice = cart.reduce((total,item)=>total + item.price,0);

    // const handleDelete=(id)=>{
    //   Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!"
    //   }).then((result) => {
    //     if (result.isConfirmed) {
          
    //       axiosSecure.delete(`/carts/${id}`)
    //       .then(res=>{
    //         if(res.data.deletedCount>0){
    //           refetch()
    //            Swal.fire({
    //         title: "Deleted!",
    //         text: "Your file has been deleted.",
    //         icon: "success"
    //       });
    //         }
    //       })
    //     }
    //   });
      
    // }
    return (
        <div>
            <div className="mt-6 ">
            <h2 className="">total items:{cart.length}</h2>
            <h2 className="">total price:{totalPrice}</h2>
{          cart.length ?  <Link ><button className="">pay</button></Link>
:
<Link ><button className="">pay</button></Link>
}            </div>
            <div className="">
  
</div>
        </div>
    );
};

export default Cart;
