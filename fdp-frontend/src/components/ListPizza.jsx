import React from 'react'
import {useEffect, useState } from "react";
import { 
    MDBContainer, 
    MDBInput, 
    MDBBtn
} from 'mdb-react-ui-kit'; 
import { FaHome, FaBox, FaShoppingCart, FaUsers } from 'react-icons/fa';
import axios from 'axios';

const ListPizza = () => {

    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/pizza/getAllPizzas")
        .then(response => setPizzas(response.data))
        .catch(error => console.error(error));
    }, [])

    

  return (
<div className="container-fluid content">
  <div className="row">
  <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px", height: "100vh"}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Sidebar</span>
      </a>
      <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a  className="nav-link text-white" aria-current="page">
            <FaHome className="bi me-2" width="16" height="16" /> Home
          </a>
        </li>
        <li>
          <a  className="nav-link text-white">
            <FaBox className="bi me-2" width="16" height="16" /> Dashboard
          </a>
        </li>
        <li>
          <a  className="nav-link text-white">
            <FaShoppingCart className="bi me-2" width="16" height="16" /> Orders
          </a>
        </li>
        <li>
          <a  className="nav-link text-white">
            <FaBox className="bi me-2" width="16" height="16" /> Products
          </a>
        </li>
        <li>
          <a  className="nav-link text-white">
            <FaUsers className="bi me-2" width="16" height="16" /> Customers
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>

    <div className="col-md-9">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {pizzas.map(pizza => (
        <div className="col" key={pizza.id} >
          <div className="card"style= {{height: "500px"}}>
            <img src={pizza.image} className="card-img-top" style={{width: "100%", height: "250px"}} alt="Image 1" />
            <div className="card-body">
              <h4 className="card-title">{pizza.name}</h4>
              <p className="card-text">{pizza.description}</p>
                <h5 className='bottom-right-text'>
                    {pizza.price}$
                </h5>
                <div className="card-footer pt-0 border-top-0 bg-transparent bottom-left-text">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Details</a></div>
                </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    
  </div>
</div>
  )
}

export default ListPizza