
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const  useCartItem = () => {
   const axiosSecure = useAxios();
   const {user} = useAuth();
  
   const {  data: cart = [] ,refetch, isLoading } = useQuery({
        

    queryKey: ['cartItem', user?.email],
    queryFn: async()=>{
        if(isLoading){
            <p>loading</p>
        }
        const res = await axiosSecure.get(`/carts?email=${user.email}`);
        // console.log("cart = ", res);
        return res.data
    }

})


    return [cart, refetch];
};

export default   useCartItem ;
