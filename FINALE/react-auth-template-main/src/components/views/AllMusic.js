import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";
import Select from 'react-select'
import Form from '../../utilities/Forms'
import { useHistory } from 'react-router-dom';
import NavBarProfil from "./NavBarProfil";
import { Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { fetchSharedMusic, pushView } from "../../constant/music/actions_constant"
import {Button } from 'react-bootstrap';

const AllMusic = () => {


const history = useHistory();
const dispatch = useDispatch();
const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));

const [Data, setData] = useState(userinfos);
const { username, fullname, email, address, password, gender, mobile, role, createdAt, image } = Data;
const [userData, setuserData] = useState({ username, fullname, email, address, password, gender, mobile, role, createdAt, image })
const [AllMusics, setAllMusics] = useState([]);

useEffect(() => {
    dispatch(fetchSharedMusic()).then((res) => {
        if(res!=null)
            {            
            setAllMusics(res.music)
            }

    });

}, []);
const GotToListen = useCallback((name,id) => () => {
    dispatch(pushView(id,userinfos._id));
    history.push("play/" + name)

});

return (
   
    <div>

    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

    <header id="header">
        <div className="d-flex flex-column">

            <div className="profile">
                <img src={userData.image} alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="index.html">{userData.fullname}</a></h1>

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
                    <h2>My Musics </h2>

                </div>


                {
                    AllMusics.map((item, index) => {
                        return (
                            <div className="row" key={index} >
                                <div className="col-lg-4" data-aos="fade-right">
                                <img src="https://i.pinimg.com/564x/75/85/06/758506c34d9f25c641921028060f50cf.jpg" className="img-fluid" alt="" />
                                <br></br>
                                <br></br>

                                <p className="group1 text-center">
                                        {/* < a onClick={GotToListen(item.mp3)}>
                                                        <i class="fa fa-twitter"> Listefhdsfdgsgd</i>
                                                    </a> */}
                                        < a onClick={GotToListen(item.name,item._id)}>
                                            <i className="bi bi-play btn btn-secondary" viewBox="0 0 16 16"> Listen To Music</i>
                                        </a>
                                       

                                    </p>
                                </div>
                                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                    <h4> Music Details</h4>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>

                                                <li><i className="bi bi-chevron-right"></i> <strong>name:</strong> {item.name}<span></span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>artistName:</strong> {item.artistName}<span></span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>genre:</strong> {item.genre}<span></span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>comments:</strong> {item.numComments}<span></span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>views:</strong> {item.views}<span></span></li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>shared:</strong>
                                                    <span>
                                                        {item.shared == true && <p style={Shared}>  ✔ </p>}
                                                        {item.shared == false && <p style={NotShared}> ✘ </p>}
                                                    </span>
                                                </li>
                                                <li><i className="bi bi-chevron-right"></i> <strong>date Creation:</strong> <span>{format(new Date(item.dateCreation), "MMMM do, yyyy H:mma")}</span></li>


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
const Shared = {
color: "green"
}
const NotShared = {
color: "red"
}
export default AllMusic; 