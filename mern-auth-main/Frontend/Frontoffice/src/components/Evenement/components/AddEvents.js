import React, { Component, useState, useEffect  } from "react";

import {  Typography, Grow, Grid, AppBar } from '@material-ui/core';

import axios from 'axios';


const Categories = () => {
    const [nom,setnom]=useState("")
    const [description,setdescription]=useState("")
    const [type,settype]=useState("")
    const [nbrpalacedispo,setnbrpalacedispo]=useState("")
    const [Phone,setPhone]=useState("")
    const [Address,setAddress]=useState({})
    const [DateDebut,setDateDebut]=useState("")
    const [DateFin,setDateFin]=useState("")
    

        
    const handleChange1 = event =>{
		setnom({nom:event.target.value})
		console.log(nom)
	  }
	  const handleChange2 = event =>{
		setdescription({description:event.target.value})
	  }
	  const handleChange3 = event =>{
		settype({type:event.target.value})
	  }
	  const handleChange4 = event =>{
		setnbrpalacedispo({nbrpalacedispo:event.target.value})
	  }
	  const handleChange5 = event =>{
		setPhone({Phone:event.target.value})
	  }
	  const handleChange6 = event =>{
		setAddress({Address:event.target.value})
	  }
	  const handleChange7 = event =>{
		setDateDebut({DateDebut:event.target.value})
	  }
	  const handleChange8 = event =>{
		setDateFin({DateFin:event.target.value})
	  }

	  const  handleSubmit =  event =>  {
		event.preventDefault();
		const evenement = {
			nom:nom.nom,
		  description:description.description,
		  type:type.type,
		  nbrpalacedispo:nbrpalacedispo.nbrpalacedispo,
		  Phone:Phone.Phone,
		  Address:Address.Address,
		  DateDebut:DateDebut.DateDebut,
		  DateFin:DateFin.DateFin,
			  
		}
	

	
		console.log(evenement)
	   var url = "http://localhost:5000/api/evenement/register"
	   axios.post(url, evenement,{
		method: 'POST',     
		headers: {
		  'Access-Control-Allow-Origin': '*',
		  'Content-Type': 'application/json',
		}})
	  .then(res => {
		console.log(res); 
		console.log(res.data);
	  })
	 // history('/dashboard')*/
	  }
        
    return (

                
    <form>
<div className="col-12">
<label for="inputNanme4" className="form-label">Nom</label>
<input type="text" className="form-control" id="inputNanme4" onChange={handleChange1}></input>
</div><br></br>

<div className="col-12">
<label for="inputAddress" className="form-label">Description</label>
<input type="text" className="form-control" id="inputAddress" onChange={handleChange2} placeholder=""></input>
</div><br></br>
<div className="col-12">
<label for="inputAddress" className="form-label">Type</label>
<input type="text" className="form-control" id="inputAddress" onChange={handleChange3} placeholder=""></input>
</div><br></br>
<div className="col-12">
<label for="inputAddress" className="form-label">Nbrpalacedispo</label>
<input type="number" className="form-control" id="inputAddress" onChange={handleChange4} placeholder=""></input>
</div><br></br>


<div className="col-12">


</div><br></br>
<div className="col-12">
<label for="inputAddress" className="form-label">Phone</label>
<textarea type="number " className="form-control" id="inputAddress" onChange={handleChange5} placeholder=""></textarea>
</div><br></br>

<div className="col-12">
<label for="inputAddress" className="form-label">Address</label>
<input type="text" className="form-control" id="inputAddress" onChange={handleChange6} placeholder=""></input>
</div><br></br>

<div className="col-12">
<label for="inputAddress" className="form-label">DateDebut</label>
<input type="date" className="form-control" id="inputAddress" onChange={handleChange7} placeholder=""></input>
</div><br></br>

<div className="col-12">
<label for="inputAddress" className="form-label">DateFin</label>
<input type="date" className="form-control" id="inputAddress" onChange={handleChange8} placeholder=""></input>
</div><br></br>






      



<div className="col-12">


</div><br></br>




<div className="text-center">
<button type="submit" class="btn btn-primary" onClick={handleSubmit}>Add</button>
</div>
</form>
    );
};

export default Categories;