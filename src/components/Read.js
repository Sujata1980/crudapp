import React,{useEffect, useState} from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom';


const Read = () => {

    const[api,setApi] = useState([]);

  // const getData = () =>{
  //   axios.get('https://675c329ffe09df667f62fdd9.mockapi.io/crud-app2')
  //   .then((res)=>{
  //       setApi(res.data)
  //       console.log(res.data);
  //   }).catch((error)=>{
  //       console.log("There is some error",error)
  //   }) 
  // }

    const getData = async () =>{
      const api = 'https://675c329ffe09df667f62fdd9.mockapi.io/crud-app2'
      try{
        const res = await axios.get(api);
        console.log(res.data);
        setApi(res.data);

      }catch(error){
        console.log("There is some error,error");
        
      }
    }

  useEffect(()=>{
    getData();
  },[])

  const setDataToStorage = (id,name,age,email) =>{

    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
    localStorage.setItem("email",email)

  }

  const handleDelete = (id) =>{
    try{
      axios.delete(`https://675c329ffe09df667f62fdd9.mockapi.io/crud-app2/${id}`)
      .then(()=>{
        getData();
      })

    }
    catch(error){
      console.log("There is some error",error)

    }
  }

 
  return (
    <>
    <NavLink to="/create">
    <button className="btn btn-primary mt-5 mb-3">Create New Data</button>
    </NavLink>
    <div className="row">
        <div className="col-md-12">
            <table className="table border-striped table-dark table-hover">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>AGE</td>
                        <td>EMAIL</td>
                        <td>EDIT</td>
                        <td>DELETE</td>
                    </tr>
                </thead>

             {
                api.map((items)=>{
                    return(
                        
                        <tbody key={items.id}>
                        <tr>
                            <td>{items.id}</td>
                            <td>{items.e_name}</td>
                            <td>{items.e_age}</td>
                            <td>{items.e_email}</td>
                            <td>
                            <NavLink to="/edit">
                           <button className="btn btn-primary" onClick={()=>setDataToStorage(items.id,items.e_name,items.e_age,items.e_email)}>Edit</button> 
                           </NavLink>
                            </td>
                            <td>
                            <button className="btn btn-danger" onClick={()=>{if(window.confirm("Are you sure you want to delete data")){handleDelete(items.id)}}}>Delete</button>
                            </td>
                        </tr>
                        </tbody>
                        
                    )

                })
             }   

                
            </table>
        </div>
    </div>  
    </>
  )
}

export default Read
