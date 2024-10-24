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
    if (!cart.length) return;

    const paymentData = {
      email: cart[0].email,
      cartItems: cart,
      totalPrice,
    };

    try {
      const response = await axios.post('http://localhost:5000/payment', paymentData);
      console.log('Payment response:', response.data);
      refetch();
      setTotalPrice(0);
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <Container>
      <div className="mb-3 text-center">
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
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr className="text-sm">
              <th>#</th>
              <th className="d-none ">Product Name</th> {/* Hide long text on extra small screens */}
              <th>Quantity</th>
              <th>Price</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td className="text-sm">{index + 1}</td>
                <td className="text-sm">{item.name}</td>
                <td className="text-sm">{item.quantity}</td>
                <td className="text-sm">${item.price}</td>
                <td className="text-sm text-truncate" style={{ maxWidth: '100px' }}>{item.email}</td> {/* Truncate and make small */}
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
