
import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { GetUsers,BanUser,UNBanUser } from "../../constant/action_constant"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function UserList() {
  const dispatch = useDispatch();
  const [textButton, setTextButton] = useState("");
  const history = useNavigate();

const [AllUsers, setAllUsers] = useState([]);

useEffect(() => {
    dispatch(GetUsers()).then((res) => {
        if(res!=null)
            {            
              setAllUsers(res.UsersList)
            }

    });

}, []);

const BAN = useCallback (
  
  (emailrecieve)=>()=>{
    let obj ={
      email:emailrecieve
    }  
    
    console.log(obj);
    dispatch(BanUser(obj,history));
  }
)
const UNBAN = useCallback (
  (emailrecieve)=>()=>{
    let obj ={
      email:emailrecieve
    }  
    dispatch(UNBanUser(obj,history));

  }
)
  return (
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {AllUsers.map((item, index) => {
                        return (
    <tr key={index} >
        <td>{item._id}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>
        {
          item.banned == true && <p style={NotShared}> ✘</p>
          
        }
        {
          item.banned == false && <p style={Shared}>✔</p>
          
        }
        </td>
        <td> 
          

{
          item.banned == false && 
          <button type="button" className="userListEdit" data-toggle="dropdown"onClick={BAN(item.email)}>
            Banned
          </button>
}
{
          item.banned == true && 
          <button type="button" className="userListEdit2" data-toggle="dropdown"onClick={UNBAN(item.email)}>
            UnBanned
          </button>
}

          
          </td>

      </tr>  
         )
        })
    }

    </tbody>
  </Table>
  );
}

const Shared = {
  color: "green"
}
const NotShared = {
  color: "red"
}