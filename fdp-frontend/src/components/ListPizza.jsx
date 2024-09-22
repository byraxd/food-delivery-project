import React from 'react'
import {useEffect, useState } from "react";
import { 
    MDBContainer, 
    MDBInput, 
    MDBBtn
} from 'mdb-react-ui-kit'; 
import axios from 'axios';

const ListPizza = () => {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/pizza/getAllPizzas")
        .then(response => setPizzas(response.data))
        .catch(error => console.error(error));
    }, [])

    

  return (
    <div className='py-5 bg-body-tertiary'>
    <div className='container-fluid'>

      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'></div>
      <div className='col'>
        <h1 className='text-center'>List of Pizza</h1>
                {pizzas.map(pizza => (
                    <ul className='ul' key={pizza.id}>
                        <li>
                        <div className="card" style={{width: "30rem", height:"32rem"}}>
                            
                            <img className="card-img-top" src={pizza.image} height="300" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder ">{pizza.name}
                                        <a> - </a> 
                                        <a className={pizza.isAvailable ? 'text-success' : 'text-danger'}>
                                            {pizza.isAvailable ? 'Available' : 'Not Available'}
                                        </a>
                                    </h5>

                                    <div className='card-text'>
                                       {pizza.description} 
                                    </div>
                                    <h5 className='bottom-right-text'>
                                        {pizza.price}$
                                    </h5>
                                    
                                </div>
                                    <div className="card-footer pt-0 border-top-0 bg-transparent bottom-left-text">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Details</a></div>
                                    </div>
                            </div>
                            
                        </div>
                        </li>
                    </ul>
                ))}
      </div>
      </div>
      </div>
    
  )
}

export default ListPizza