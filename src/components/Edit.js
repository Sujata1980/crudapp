import React,{useState,useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios";

const Edit = () => {

  const[id,setId] = useState('');
  const[name,setName] = useState('');
  const[age,setAge] = useState('');
  const[email,setEmail] = useState('');

  useEffect(()=>{
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setAge(localStorage.getItem('age'));
    setEmail(localStorage.getItem('email'));
  },[]);

  const navigate = useNavigate();

  const handleUpdate = async (e) =>{
      try{
        e.preventDefault();
        await axios.put(`https://675c329ffe09df667f62fdd9.mockapi.io/crud-app2/${id}`,{
          e_name:name,
          e_age:age,
          e_email:email
        }).then(()=>{
          navigate("/");
        })

      }catch(error){
        console.log("There is some error",error);
      }
  }

  // const handleUpdate = (e) =>{
  //   e.preventDefault();
  //    axios.put(`https://675c329ffe09df667f62fdd9.mockapi.io/crud-app2/${id}`,{
  //             e_name:name,
  //             e_age:age,
  //             e_email:email
  //            }).then(()=>{
  //              navigate("/");
  //            })
    

  // }
   return (
    <>
    <div className="row">
      <NavLink to="/">
      <button className="btn btn-primary mt-5">Read Data</button>
      </NavLink>
      <div className="col-md-4">
        <div>
          <h1 className="bg-primary text-center mt-3">Update Data</h1>
        </div>

        <form onSubmit={handleUpdate}>

        <div className="form-group">
          <label className="form-label">Enter Name :</label>
          <input type="text" placeholder="Name" className="form-control"  value={name} onChange={(e)=>setName(e.target.value)} />
        </div>

         <div className="form-group">
          <label className="form-label">Enter Age :</label>
          <input type="number" placeholder="Age" className="form-control"  value={age} onChange={(e)=>setAge(e.target.value)}/>
        </div>

        <div className="form-group">
          <label className="form-label">Enter Email :</label>
          <input type="email" placeholder="Email" className="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        
        <div className="d-grid">
        <button type="submit" value='update' className="btn btn-primary mt-2">Update Data</button>
        {/* <input type="submit" placeholder="Submit"/> */}
        </div>
        </form>
      </div>
    </div>

    
  
    

      
    </>
  )
}

export default Edit
