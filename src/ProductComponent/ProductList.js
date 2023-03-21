import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function ProductList() {
    const [data, setData] = useState([]);
    const myNav = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(respose => respose.json())
            .then(result => setData(result))
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center' >
                {
                    data.map((value, index) => {
                        return (
                            <div key={index}
                                onClick={() => {
                                    myNav(`/productdetails/${value.id}`)
                                }}
                                className='col-4 m-3 d-flex flex-column p-3 align-items-center'
                                style={{ border: '1px solid black',}}>
                                <img src={value.image} alt='' width='100px' />
                                <p><span className='fs-4'>Title : </span>{value.title}</p>
                                <p><span className='fs-4'>Category : </span>{value.category}</p>
                                <p><span className='fs-4'>Price : </span>{value.price}$</p>
                                <p><span className='fs-4'>Description : </span>{value.description}</p>
                                <button type='button' className='btn btn-primary'
                                    onClick={() => {
                                        myNav(`/productdetails/${value.id}`)
                                    }}
                                >View</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}