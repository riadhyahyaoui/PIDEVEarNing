import React,{useState,useEffect} from "react";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import {useParams} from "react-router"
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {NavLink} from "react-router-dom";
import axios from 'axios';
import './Evenement.css'
import {isWebpSupported} from 'react-image-webp/dist/utils';
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;



const Image = styled.img`
  height: 300px;
  width: 300px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Evenementdetails = () => {
    const {id}=useParams()
    const [item,setEvent] = useState({});

    const [events,setEventsScrap]=useState([])
     
    useEffect(async()=>{
        axios.get("http://127.0.0.1:8000/Events").then((data)=>{
            console.log(data.data)
            setEventsScrap(data.data)
        })
        await axios.get('http://localhost:5000/api/event/' + id)
        .then(function (res) {
          setEvent(res.data);
            console.log("data", res.data);
        })
    },[])
    
    return (
     
                      
    
          <div style={{background: "rgba(60,13,153)"}}>
          <br/>
          <div className="container-fluid">
              <section className="tm-mb-1" id="about">
                  <div className="tm-row tm-about-row">
                  <div className="tm-section-1-l">
                  <div className="Evenement">
               
                
              
                <Box sx={{ width: "100%", padding: "10px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {events.map((e) => (
            <Grid item xs={3} style={{color:'white', fontWeight:'bold'}}>
              <div class="column"><p>{e.fest_name}</p>
              <img  src={e.img}></img>
       
                <p>{e.location}</p></div>
            </Grid>
          ))}
        </Grid>
      </Box></div>
                </div>
                      <article className="tm-section-1-r tm-bg-color-8">
                          <h2 className="tm-mb-2 tm-title-color">{item.nom}</h2>
                          <p></p>
                          <img
          crossOrigin="anonymous"
          src={item?.picture}
          alt="#"
          style={{ width: "100%", height: "100%" }}
        />
                          <p style={{color:"darkblue"}}>Description : {item.description}</p>
                          <p style={{color:"darkblue"}}>type :  {item.type}</p>
                          <p style={{color:"darkblue"}}>nbrpalacedispo : {item.nbrpalacedispo}</p>
                          <p style={{color:"darkblue"}}>Phone : {item.Phone}</p>
                          <p style={{color:"darkblue"}}>Address : {item.Address}</p>
                          <p style={{color:"darkblue"}}>DateDebut : {item.DateDebut}</p>
                          <p style={{color:"darkblue"}}>DateFin : {item.DateFin}</p>
                         
                      </article>
                  </div>
              </section>
              </div>
      
      </div>
        
    );
};

export default Evenementdetails;
    