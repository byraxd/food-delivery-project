import axios from 'axios';
import {useEffect, useState } from "react";
import { 
    MDBContainer, 
    MDBInput, 
    MDBBtn
} from 'mdb-react-ui-kit'; 

const Pizza = () => {
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[price, setPrice] = useState('');
    const[isAvailable, setIsAvailable] = useState('');

    const[error, setError] = useState('');

    const createPizza = async () => {
        try{
            if(!name || !description || !price || !isAvailable){
                setError('Please fill in all fields')
                return;
            }

            const response = await axios.post("http://localhost:8080/api/pizza/addPizza",{
                name,
                description,
                price,
                isAvailable
            });

            console.log(response.data);
        }catch(error){
            console.error("Create pizza error", error.response ? error.response.data: error.message);
        }
    }   
     return (
        <div className="container"> 
                <div className="card">
                <MDBContainer className='card-body'> 
                    <h2 className="mb-4 text-center">Pizza adding form</h2> 
                    {/* Render error message if exists */} 
                    {error && <p className="text-danger">{error}</p>} 
                    <MDBInput wrapperClass='form-group mb-2' id='name' placeholder={"Pizza name"} value={name} type='text'
                              onChange={(e) => setName(e.target.value)}/> 
                    <MDBInput wrapperClass='form-group mb-2' placeholder={"Pizza Description"} id='description' value={description} type='text'
                              onChange={(e) => setDescription(e.target.value)}/> 
                    <MDBInput wrapperClass='form-group mb-2' placeholder={"Price"} id='price' type='text' value={price} 
                              onChange={(e) => setPrice(e.target.value)}/> 

                    <label className="form-group mb-2">Is Available:</label> 
                    <select className="form-select mb-4" value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)}> 
                        <option value="true">Available</option> 
                        <option value="false">Not Available</option> 
                    </select> 
                    <button className="btn btn-success"
                            onClick={createPizza}>createPizza
                    </button> 
  
                </MDBContainer> 
            </div> 
        </div> 
    );
}
export default Pizza