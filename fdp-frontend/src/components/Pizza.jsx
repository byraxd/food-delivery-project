import axios from 'axios';
import {useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
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
    const[image, setImage] = useState('');

    const[error, setError] = useState('');


    const navigator = useNavigate();

    const createPizza = async () => {
        try{
            if(!name || !description || !price || !isAvailable || !image){
                setError('Please fill in all fields')
                return;
            }

            const response = await axios.post("http://localhost:8080/api/pizza/addPizza",{
                name,
                description,
                price,
                isAvailable,
                image
            });

            console.log(response.data);
             navigator("/listPizza");
        }catch(error){
            console.error("Create pizza error", error.response ? error.response.data: error.message);
        }
    } 
     return (
        <div className="container"> 
                <div className="card">
                <MDBContainer className='card-body'> 
                    <h2 className="mb-4 text-center">Pizza adding form</h2> 
                    
                    {error && <p className="text-danger">{error}</p>} 
                    <MDBInput wrapperClass='form-group mb-2' id='name' placeholder={"Pizza name"} value={name} type='text'
                              onChange={(e) => setName(e.target.value)}/> 
                    <MDBInput wrapperClass='form-group mb-2' placeholder={"Pizza Description"} id='description' value={description} type='text'
                              onChange={(e) => setDescription(e.target.value)}/> 
                    <MDBInput wrapperClass='form-group mb-2' placeholder={"Price"} id='price' type='text' value={price} 
                              onChange={(e) => setPrice(e.target.value)}/> 
                    <MDBInput wrapperClass='form-group mb-2' placeholder={"Image"} id='image' type='text' value={image}
                              onChange={(e) => setImage(e.target.value)}/>

                    <label className="form-group mb-2">Is Available:</label> 
                    <select className="form-select mb-4" value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)}> 
                        <option>Please choose option</option>
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