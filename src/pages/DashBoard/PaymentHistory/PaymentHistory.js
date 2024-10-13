import React from 'react';
import useAuth from '../../../CustomHooks/useAuth';
import useAxios from '../../../CustomHooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Table } from 'react-bootstrap';

const PaymentHistory = () => {

    const {user} = useAuth();
    const axiosSecure = useAxios()

   const {data: payments=[]} =useQuery({
    
    queryKey:['payments', user.email],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/payment/${user.email}`)
        return res.data
    }
}) 
console.log("payments in history", payments)
    return (
        <div>
<div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded fs-3 mx-auto p-2 text-center color-green">Payment History</div>
<Table className='table table-white table-striped"'>
          <thead>
            <tr className='color-green'>
              <th>#</th>
              <th>Transaction id</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
           
          <tbody className=''>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment.transactionId}</td> 
                <td>{payment.price}</td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
               
        </Table>
        </div>

    );
};

export default PaymentHistory;