import React, { useState } from 'react'
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';

const Create = () => {

  const[data,setData] = useState({name:"",age:"",email:""});

  const handleChange = (e) =>{
    setData(()=>({
      ...data,
      [e.target.name]:e.target.value
    }))
  }

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    try{axios.post('https://675c329ffe09df667f62fdd9.mockapi.io/crud-app2',{
      e_name:data.name,
      e_age:data.age,
      e_email:data.email
    }).then(()=>{
      navigate("/");
    })
  }catch(error){
    console.log("There is some error",error);
  }
  }
 
  
 
  return (
    <>
    <div className="row">
      <NavLink to="/">
      <button className="btn btn-primary mt-5">Read Data</button>
      </NavLink>
      <div className="col-md-4">
        <div>
          <h1 className="bg-primary text-center mt-3">Create Data</h1>
        </div>

        <form onSubmit = {handleSubmit}>

        <div className="form-group">
          <label className="form-label">Enter Name :</label>
          <input type="text" placeholder="Name" className="form-control" name="name" onChange={handleChange}/>
        </div>

         <div className="form-group">
          <label className="form-label">Enter Age :</label>
          <input type="number" placeholder="Age" className="form-control" name="age" onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label className="form-label">Enter Email :</label>
          <input type="email" placeholder="Email" className="form-control" name="email" onChange={handleChange} />
        </div>
        
        <div className="d-grid">
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
        {/* <input type="submit" placeholder="Submit"/> */}
        </div>
        </form>
      </div>
    </div>

    {data.name}<br/>
    {data.age}<br/>
    {data.email}
      
    </>
  )
}

export default Create
