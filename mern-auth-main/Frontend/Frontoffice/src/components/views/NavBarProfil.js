import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { desactiver} from "../../constant/actions_constant";
import {useSelector} from "react-redux";

const NavBarProfil = () => {



    const history = useNavigate();
const dispatch = useDispatch();
 //const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));
 const userinfos = useSelector(state =>state.user.currentUser);

const [Data, setData] = useState(userinfos);

const deleteAccount = () => {
  dispatch(desactiver(userinfos._id,history));
console.log(userinfos._id)
}
const [show, setShow] = useState(false);

//localStorage.removeItem
const handleLougout = () =>{
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
    history('/');//USER
}


const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
   
    
            <div>
                

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Desactivate Account </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sur !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteAccount}>
            Desactivate
          </Button>
        </Modal.Footer>
      </Modal>
                <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
                <div className="d-flex flex-column">
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><Link to="/"
                                className="nav-link scrollto ">
                                    <i className="bx bx-home"></i> 
                                    <span>Home</span>
                                    </Link>
                            </li>
                            <li><Link to="/Profil"
                                className="nav-link scrollto">
                                <i className="bx bx-user"></i>
                                <span>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/suggestions" className="nav-link scrollto ">
                                    <i className=" bx bx-user-plus"></i>
                                    <span> Suggestions
                                        &nbsp;&nbsp;&nbsp;

                                        <i className="bx bx-bell">6</i>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="nav-link scrollto">
                                    <i className="bx bx-group"></i>
                                    <span>Contact</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/music" className="nav-link scrollto">
                                    <i className="bx bx-music"></i>
                                    <span>My Musics</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/AllMusic" className="nav-link scrollto">
                                    <i className="bx bx-music"></i>
                                    <span>Musics Plateform</span>
                                </Link>
                            </li>
                            <li><Link to="/reclamation" className="nav-link scrollto"><i className=" bx bx-message-error"></i>  <span>Reclamation</span></Link></li>

                            
                            {/* <li><Link to="/" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Message</span></Link></li> */}
                            <li><a className="nav-link scrollto" onClick={handleShow}><i className='bx bxs-user-x'></i> <span>Desactiver</span></a></li>
                            <li> <a onClick={handleLougout} className="nav-link scrollto"> <i className=" bx bx-log-out"></i> <span> Logout</span> </a></li>

                        </ul>

                    </nav>
                    {/* <!-- .nav-menu --> */}
                </div>
            </div>
        );
    }

export default NavBarProfil; 