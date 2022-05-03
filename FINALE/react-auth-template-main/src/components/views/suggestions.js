import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select'
import Form from '../../utilities/Forms'
import { useHistory } from 'react-router-dom';
import NavBarProfil from "./NavBarProfil";
import { Sendfollow ,GetSuggestions} from "../../constant/actions_constant";
import { Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
const Reclamation = () => {

    const history = useHistory();
    const historyRefrech = createHistory();

    const dispatch = useDispatch();
    const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));

    const [Data, setData] = useState(userinfos);
    const { username, fullname, email, address, password, gender, mobile, role, createdAt, image } = Data;
    const [userData, setuserData] = useState({ username, fullname, email, address, password, gender, mobile, role, createdAt, image })

   
    const Nbr = 5;


    const [AllSuggesst, setAllSuggesst] = useState([]);
    
    
    const handleChange = useCallback (
        (id)=>()=>{
         dispatch(Sendfollow(userinfos._id,id,history));
        }
    )

    useEffect(() => {
        dispatch(GetSuggestions(userinfos._id)).then((res) => {
            setAllSuggesst(res.UsersList)
            
        });

     }, []);
     console.log("all => ", AllSuggesst)

  
    
    return (

        <div>
        
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src={userData.image} alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light">{userData.fullname}</h1>

                    </div>
                    <NavBarProfil />

                </div>
            </header>
            {/* <!-- End Header --> */}


            {/* <!-- End Hero --> */}

            <main id="main">

                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                            <h2>Suggestions</h2>
                            
                        </div>






                        {
                            AllSuggesst.map((item, index) => {
                                return (
                                    <div className="row" key={index} >
                                        <div className="col-lg-4" data-aos="fade-right">
                                        <img src={item.image}></img>
                                        </div>
                                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                            <h3> {item.fullname} &nbsp;
                                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                <button type="button" className="btn btn-secondary " data-toggle="dropdown"onClick={handleChange(item._id)} >
                                    follow 
                                </button>
                              
                               

                            </div>

                                            </h3>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <ul>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>username:</strong> {item.username}<span></span></li>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>email:</strong> {item.email}<span></span></li>
                                    
                                                    </ul>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </section>
                {/* <!-- End About Section --> */}

            </main>
            {/* <!-- End #main --> */}






        </div>
    );

}
const Done = {
    color: "green"
}
const Notyet = {
    color: "red"
}
export default Reclamation;

