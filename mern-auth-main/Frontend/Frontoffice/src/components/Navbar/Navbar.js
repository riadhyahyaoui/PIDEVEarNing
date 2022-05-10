import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
    //const navigate = useNavigate();
    /*const handleButtonClick = () => {
        history.push('/f')
    }*/
    const currentuser=useSelector(state=>state.user?.currentUser);
    console.log( "navbar current user :",currentuser);
    const isAdmin=currentuser?.isAdmin;
    return (

      // {currentuser &&
      // <Link to="/Profil"><MenuItem>Profil</MenuItem></Link>

                 <header >
                  
                    <Link to="/">
                    <button className="primary-button2" id="reg_btn"><span>Home </span></button>
                    </Link>
                    <Link to="/karaoke">
                        <button className="primary-button2" id="reg_btn"><span>karaoke </span></button>
                    </Link>
                    <Link to="/emotion">
                        <button className="primary-button2" id="reg_btn"><span>Music Mood </span></button>
                    </Link>
                    <Link to="/marketplace">
                        <button className="primary-button2" id="reg_btn"><span>MarketPlace </span></button>
                    </Link>
                    <Link to="/evenement">
                        <button className="primary-button2" id="reg_btn"><span>evenement </span></button>
                    </Link>
                    <Link to="/course">
                        <button className="primary-button2" id="reg_btn"><span>Course </span></button>
                    </Link>
                    {currentuser &&
        
                    <Link to="/Profil">
                        <button className="primary-button2" id="reg_btn"><span>Profil </span></button>
                    </Link>
                  }
          </header>
                            
    );
};

export default Navbar;
