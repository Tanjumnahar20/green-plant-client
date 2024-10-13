


// /* eslint-disable no-unused-vars */
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import useAuth from "./useAuth";

// const useCartItem = () => {
//   const { user } = useAuth();

//   // Use React Query to fetch cart items
//   const { data: cart = [], refetch, isLoading } = useQuery({
//     queryKey: ['cartItem', user?.email], // Query key depends on user email
//     queryFn: async () => {
//       // Check if user exists
//       if (!user?.email) {
//         return [];
//       }

//       // Get the JWT token from localStorage
//       const token = localStorage.getItem('access-token');

//       // Make sure the token exists
//       if (!token) {
//         throw new Error('No token found');
//       }

//       // Fetch cart items using Axios, passing the token in the Authorization header
//       const res = await axios.get(`http://localhost:5000/carts?email=${user.email}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT token in header
//         },
//       });

//       console.log("cart = ", res.data); // Log cart data
//       return res.data; // Return cart data
//     },
//   });

//   return [cart, refetch, isLoading]; // Return cart, refetch, and loading state
// };

// export default useCartItem;

/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
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
