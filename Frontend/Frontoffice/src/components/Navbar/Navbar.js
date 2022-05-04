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
    const currentuser=useSelector(state=>state.user.currentUser);
    const isAdmin=currentuser.isAdmin;
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Ear_ning</Logo>
                    <Menu>
                        <Link to="/"> <MenuItem>Home</MenuItem></Link>
                     <Link to="/karaoke"> <MenuItem>Karaoké</MenuItem> </Link>
                        <Link to="/emotion"><MenuItem>Music Mood</MenuItem></Link>
                        <Link to="/marketplace"><MenuItem>MarketPlace</MenuItem></Link>
                        <Link to="/evenement"><MenuItem>Evenement</MenuItem></Link>
                        { isAdmin  && <Link to="/back"><MenuItem>Dashboard</MenuItem></Link>}
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
              <Link to="/login"><Button>Sign In</Button></Link>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
