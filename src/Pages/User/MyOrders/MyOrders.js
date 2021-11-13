import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Button } from '@mui/material';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const uri = `https://serene-wildwood-59933.herokuapp.com/my-orders/${user.email}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [user.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        const remaining = orders.filter(order => order._id !== id);
        setOrders(remaining);
        if (proceed) {
            const uri = `https://serene-wildwood-59933.herokuapp.com/orders/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('This order has been deleted successfully.')
                    }
                })
        }
    }
    // ---------------------------------------
    return (
        <div className='mb-5 mx-auto' style={{ minHeight: '300px', textAlign: 'center' }}>
            <h2 className='my-5 mx-auto' style={{ textAlign: 'center' }}>All Booked Orders!</h2>

            <div className='row row-cols-4 row-cols-md-4  my-2'>
                <h5 className='mx-auto' style={{ textAlign: 'center' }}>Orders</h5>
                {/* <p className=''>Price </p> */}
                <p className='ps-5'>User Name </p>
                <p className='ps-5'>Status</p>
                <p>Action</p>
            </div>

            {/* A section with Read, Update & Delete APIs */}
            <ul className='unstyled-list' style={{ listStyle: 'none' }}>
                {
                    orders.map(order => <li key={order._id}>
                        <div className='row row-cols-4 row-cols-md-4 flex-wrap my-2'>
                            <h5 style={{ textAlign: 'left', display: 'flex' }}>
                                <Avatar alt="Real Sharp" src={order.img} style={{ marginRight: 3 }} />
                                {order?.name}
                            </h5>
                            <p>{order?.user?.name} </p>
                            {
                                order?.isPending ? <span>Pending </span> : <p>Shipped </p>
                            }

                            <div className='w-25'>
                                <Button
                                // variant="contained" 

                                // className='btn btn-danger '
                                >
                                    <DeleteIcon onClick={() => handleDelete(order._id)} />
                                </Button>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default MyOrders;