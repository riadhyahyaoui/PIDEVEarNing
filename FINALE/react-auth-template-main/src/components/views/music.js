import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select'
import Form from '../../utilities/Forms'
import { useHistory } from 'react-router-dom';
import NavBarProfil from "./NavBarProfil";
import { fetechMusicsDetails, add,pushView,shareWith } from "../../constant/music/actions_constant"
import { Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { Link } from "react-router-dom";
var toWav = require('audiobuffer-to-wav')
var xhr = require('xhr')

const Music = () => {

    const history = useHistory();
    const historyRefrech = createHistory();

    const dispatch = useDispatch();
    const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));

    const [Data, setData] = useState(userinfos);
    const { username, fullname, email, address, password, gender, mobile, role, createdAt, image } = Data;
    const [userData, setuserData] = useState({ username, fullname, email, address, password, gender, mobile, role, createdAt, image })
    const [AllMusics, setAllMusics] = useState([]);

    const [validate, setValidate] = useState({});


    const [shared, setShared] = useState(false);
    const [duration, setDuration] = useState(0);
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [artistName, setArtistName] = useState('');



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);




    useEffect(() => {
        dispatch(fetechMusicsDetails(userinfos._id)).then((res) => {
            if(res!=null)
            {            
            setAllMusics(res.music)
            }

        });

    }, []);

    const [file, setFile] = useState("");
    const songRef = useRef();

    const onInputFileChange = (event) => {
        console.log(event.target.files[0])
        setFile(event.target.files[0].type === 'audio/mpeg' ? event.target.files[0] : null);
    };

    console.log("all => ", AllMusics)
    const validateMusic = () => {
        let isValid = true;

        let validator = Form.validator({
            shared: {
                value: shared,
                isRequired: true,
            },
            duration: {
                value: duration,
                isRequired: true,
            },
            description: {
                value: description,
                isRequired: true,
            },
            genre: {
                value: genre,
                isRequired: true,
            },
            artistName: {
                value: artistName,
                isRequired: true,
            },



        });


        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }


    const GotToListen = useCallback((name,id) => () => {
        dispatch(pushView(id,userinfos._id));
        history.push("play/" + name)

    });

    const ShareMusic = useCallback((id) => () => {
        dispatch(shareWith(id,history));


    });


    const Share = [
        { value: true, label: 'Shared' },
        { value: false, label: 'shared' },
    ]
    const Duration = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' }


    ]
    const AddMusic = (e) => {

        const formData = new FormData();
        formData.append('song', file)
        formData.append('description', e.target.description.value)
        formData.append('artistName', e.target.artistName.value)

        console.log(file)
        e.preventDefault();
        const obj = {
            description: e.target.description.value,
            artistName: e.target.artistName.value,
        }
        console.log(formData)
        for (const val of formData.values) {
            console.log(val)

        }
        const validate = validateMusic();
        // dispatch(add(formData,userinfos._id, history));
        setShow(false)

        if (validate) {

        }
    }



    return (

        <div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New Music </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <form className="auth-form" method="" onSubmit={AddMusic} autoComplete={'off'}>

                            <div className="form-group col-md-12">

                                <div className="name mb-3">

                                    <label htmlFor="artistName">artistName </label>

                                    <textarea type="text" rows="10"
                                        className={`form-control ${validate.validate && validate.validate.artistName ? 'is-invalid ' : ''}`}
                                        id="artistName"
                                        name="artistName"
                                        value={artistName}
                                        placeholder="Type Your Complaint ...   "
                                        onChange={(e) => setArtistName(e.target.value)}

                                    />
                                </div>

                                <div className="name mb-3">

                                    <label htmlFor="description">description </label>

                                    <textarea type="text" rows="10"
                                        className={`form-control ${validate.validate && validate.validate.description ? 'is-invalid ' : ''}`}
                                        id="description"
                                        name="description"
                                        value={description}
                                        placeholder="Type Your Complaint ...   "
                                        onChange={(e) => setDescription(e.target.value)}

                                    />
                                </div>
                                <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.description) ? 'd-block' : 'd-none'}`} >
                                    {(validate.validate && validate.validate.description) ? validate.validate.description[0] : ''}
                                </div>
                                {/* <div className="name mb-3">
                                    <Select options={options}
                                        className={`form-control ${validate.validate && validate.validate.type ? 'is-invalid ' : ''}`}
                                        id="type"
                                        name="type"
                                        value={options.value}
                                        placeholder="type"
                                        onChange={(e) => setType(options.value)}
                                    />


                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.type) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.type) ? validate.validate.type[0] : ''}
                                    </div>
                                </div> */}

                                <input
                                    accept={".mp3,.wav"}
                                    ref={songRef}
                                    type="file"
                                    onChange={onInputFileChange}
                                />

                            </div>
                            <div className="name mb-3">
                                <button id="sub_btn" >Send </button>
                            </div>
                        </form>

                    </div>

                </Modal.Body>


            </Modal>

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
                                                </a>&nbsp;
                                                &nbsp;

                                                < a onClick={ShareMusic(item._id)}>
                                                    <i className="bi bi-share btn btn-secondary" viewBox="0 0 16 16"> Share</i>
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

                        <div className="text-center">
                            <Button variant="primary" onClick={handleShow}>
                                New Music
                            </Button>
                        </div>
                        <div className="banner-bottom">




                            <div className="clearfix"></div>
                        </div>

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
export default Music;

