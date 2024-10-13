
// import { Link } from "react-router-dom";
// import useCartItem from "../../CustomHooks/useCartItem";
// import Table from 'react-bootstrap/Table';
// import { useState, useEffect } from "react";
// import axios from 'axios';

// const Cart = () => {
//   const [cart, refetch] = useCartItem();
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
    
//     const calculatedPrice = Math.round(cart.reduce((total, item) => total + item.price , 0));
//     console.log("totalprice", calculatedPrice);
//     setTotalPrice(calculatedPrice);
//   }, [cart]);

//   const handlePaymentSuccess = async () => {
//     // Send cart information to backend for processing
//     const paymentData = {
//       email: cart[0].email, // assuming all items belong to the same user
//       cartItems: cart,
//       totalPrice,
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/payment', paymentData);
//       console.log('Payment response:', response.data);
//       refetch(); // Refresh the cart after successful payment
//       setTotalPrice(0); // Reset total price
//     } catch (error) {
//       console.error('Payment failed:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="mt-6">
//         <h2>Total Items: {cart.length}</h2>
//         <h2>Total Price: {totalPrice}</h2>

//         {cart.length ? (
//           <Link to='/dashboard/payment'>
//             <button onClick={handlePaymentSuccess}>Pay</button>
//           </Link>
//         ) : null}
//       </div>

//       {cart.length ? (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Product Name</th>
//               <th>Quantity</th>
//               <th>Price</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item, index) => (
//               <tr key={item._id}>
//                 <td>{index + 1}</td>
//                 <td>{item.name}</td>
//                 <td>{item.quantity}</td> {/* Display item quantity */}
//                 <td>{item.price}</td>
//                 <td>{item.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       ) : (
//         <p>No items in the cart.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;
import { Link } from "react-router-dom";
import useCartItem from "../../CustomHooks/useCartItem";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Cart = () => {
  const [cart, refetch] = useCartItem();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedPrice = Math.round(cart.reduce((total, item) => total + item.price, 0));
    console.log("totalprice", calculatedPrice);
    setTotalPrice(calculatedPrice);
  }, [cart]);

  const handlePaymentSuccess = async () => {
    if (!cart.length) return; // Prevent payment if the cart is empty

    const paymentData = {
      email: cart[0].email, // assuming all items belong to the same user
      cartItems: cart,
      totalPrice,
    };

    try {
      const response = await axios.post('http://localhost:5000/payment', paymentData);
      console.log('Payment response:', response.data);
      refetch(); // Refresh the cart after successful payment
      setTotalPrice(0); // Reset total price
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <Container className="">
        <main>prbbb</main>
        <header>sugggh</header>
      <div className=" mb-3 text-center">
        <h2 className="mb-2">Cart Summary</h2>
        <p><strong>Total Items:</strong> {cart.length}</p>
        <p><strong>Total Price:</strong> ${totalPrice}</p>

        {cart.length ? (
          <Link to='/dashboard/payment'>
            <Button variant="success" onClick={handlePaymentSuccess} className="mt-2">
              Proceed to Payment
            </Button>
          </Link>
        ) : null}
      </div>

      {cart.length ? (
        <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td> {/* Display item quantity */}
                <td>${item.price}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center mt-4">No items in the cart.</p>
      )}
    </Container>
  );
};

export default Cart;


