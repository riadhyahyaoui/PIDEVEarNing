import React, { useState, useEffect,useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBarProfil from "./NavBarProfil";
import { GetAll, GetOnlyFollowers, GetOnlyFollowing } from "../../constant/actions_constant";
import { SendUnfollow } from '../../constant/actions_constant';
import {useSelector} from "react-redux";

const Contact = () => {

    const history = useNavigate();

    const dispatch = useDispatch();
 //const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));
 const userinfos = useSelector(state =>state.user.currentUser);

    const [Data, setData] = useState(userinfos);
    const { username, fullname, email, address, password, gender, mobile, role, createdAt, image } = Data;
    const [userData, setuserData] = useState({ username, fullname, email, address, password, gender, mobile, role, createdAt, image })


    const Nbr = 5;


    const [AllFriends, setAllFriends] = useState([]);
    const [textButtonFollowers, setTextButtonFollowers] = useState("Followers");
    const [textButtonFollowing, setTextButtonFollowing] = useState("Following");

    const [change, setChange] = useState(true);
    const [InputText, setInputText] = useState("All Contacts")
    const [disabledFollowers, setDisabledFollowers] = useState(false)
    const [disabledFollowing, setDisabledFollowing] = useState(false)

    useEffect(() => {
        dispatch(GetAll(userinfos._id)).then((res) => {
            setAllFriends(res.user.friendList)
            console.log(res.user.friendList)
        });

    }, []);
    console.log("all => ", AllFriends)
    console.log(change)

    const handleChange = useCallback (
        (id)=>()=>{
       console.log(id)
             dispatch(SendUnfollow(userinfos._id,id,history));
        }
    )
    const FetchFollowers = () => {
        setDisabledFollowing(!disabledFollowing)
        console.log("followers")
        if (change) {
            setTextButtonFollowers("All Contacts")

            setInputText("followers")

            setChange(!change);
            dispatch(GetOnlyFollowers(userinfos._id)).then((res) => {
                setAllFriends(res.user.friendList)
            });
        }
        else {
            setInputText("All Contacts")
            setTextButtonFollowers("Followers")

            setChange(!change);
            dispatch(GetAll(userinfos._id)).then((res) => {
                setAllFriends(res.user.friendList)
            });
        }

    }


    const FetchFollowing = () => {
        setDisabledFollowers(!disabledFollowers)
        if (change) {
            setTextButtonFollowing("All Contact")
            setInputText("Following")
            setChange(!change);
            dispatch(GetOnlyFollowing(userinfos._id)).then((res) => {
                setAllFriends(res.user.friendList)
            });
        }
        else {
            setTextButtonFollowing("Following")

            setChange(!change);
            setInputText("All Contacts")

            dispatch(GetAll(userinfos._id)).then((res) => {
                setAllFriends(res.user.friendList)
            });
        }
    }


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
                            <h2>Suggestions / {InputText}</h2>
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                {/* <button type="button" className="btn btn-secondary " data-toggle="dropdown"onClick={Fetch}  >
                                   {textButton}
                                </button> */}
                                <button disabled={disabledFollowers == true} type="button" className="btn btn-secondary " data-toggle="dropdown" onClick={FetchFollowers}  >
                                    {textButtonFollowers}
                                </button>
                                &nbsp;  &nbsp; &nbsp;
                                <button disabled={disabledFollowing == true} type="button" className="btn btn-secondary " data-toggle="dropdown" onClick={FetchFollowing}  >
                                    {textButtonFollowing}

                                </button>

                            </div>
                        </div>






                        {
                            AllFriends.map((item, index) => {
                                return (
                                    <div className="row" key={index} >
                                        <div className="col-lg-4" data-aos="fade-right">
                                            <img src={item.image}></img>
                                        </div>
                                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                            <h3> { item.fullname} </h3>
                                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                <button type="button" className="btn btn-secondary " data-toggle="dropdown"onClick={handleChange(item._id)} >
                                    unfollow
                                </button>
                              
                               

                            </div>
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
export default Contact;

