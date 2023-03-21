import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
export default function ProductDetails() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(respose => respose.json())
            .then(result => setData(result))
    }, [])
    return (
        <div className='container mt-5 '>
            <div className='d-flex justify-content-center p-5' style={{ border: '1px solid black', }}>
                <img src={data?.image} alt='' width='250px' />
                <div className='ms-5'>
                    <p className='fs-5'><strong className='fs-4'>Title : </strong>{data?.title}</p>
                    <p className='fs-5'><strong className='fs-4'>Category : </strong>{data?.category}</p>
                    <p className='fs-5'><strong className='fs-4'>Price : </strong>{data?.price}$</p>
                    <p className='fs-5'><strong  className='fs-4'>Description : </strong>{data?.description}</p>
                </div>
            </div>
        </div>
    )
}
