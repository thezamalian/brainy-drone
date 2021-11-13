import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Button } from '@mui/material';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const uri = `https://serene-wildwood-59933.herokuapp.com/products`;
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [user.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const uri = `https://serene-wildwood-59933.herokuapp.com/products/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }

    return (
        <div className='mb-5 mx-auto' style={{ minHeight: '300px', textAlign: 'center' }}>
            <h2 className='my-5 mx-auto' style={{ textAlign: 'center' }}>All of Our Products!</h2>

            <div className='row row-cols-4 row-cols-md-4  my-2'>
                <h5 >Products</h5>
                {/* <p className=''>Price </p> */}
                <p style={{ marginRight: '20vw' }}>Price </p>
                <p style={{ marginLeft: '-20vw' }}>Action</p>
            </div>

            {/* A section with Read, Update & Delete APIs */}
            <ul className='unstyled-list' style={{ listStyle: 'none' }}>
                {
                    products.map(product => <li key={product._id}>
                        <div className='row row-cols-4 row-cols-md-4 flex-wrap my-2'>
                            <h5 style={{ textAlign: 'left', display: 'flex' }}>
                                <Avatar alt="Real Sharp" src={product.img} style={{ marginRight: 3 }} />
                                {product?.name}
                            </h5>
                            <p>{product?.price} </p>

                            <div className='w-25'>
                                <Button
                                    // variant="contained" 
                                    onClick={() => handleDelete(product._id)}
                                // className='btn btn-danger '
                                >
                                    <DeleteIcon />
                                </Button>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default ManageProducts;