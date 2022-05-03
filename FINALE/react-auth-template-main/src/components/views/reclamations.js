import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select'
import Form from '../../utilities/Forms'
import { useHistory } from 'react-router-dom';
import NavBarProfil from "./NavBarProfil";
import { add,fetchReclamation,OnlyDone } from "../../constant/reclamation/actions_contant";
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
    const [AllReclamations, setAllReclamations] = useState([]);

    const [validate, setValidate] = useState({});
    const [content, setContent] = useState('');
    const [type, setType] = useState('');

    const Nbr = 5;



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const handleDone = () => setisDone(!isDone);
    const [isDone, setisDone] = useState(false);

    useEffect(() => {
        dispatch(fetchReclamation(userinfos._id)).then((res) => {
            setAllReclamations(res.reclamations)
      
        });

     }, []);
    const Fetch = () => {
        console.log(isDone);

        if (isDone) {
            setisDone(!isDone);
            console.log("State :",isDone)
            dispatch(fetchReclamation(userinfos._id)).then((res) => {
                setAllReclamations(res.reclamations)
          
            });

        } 
        else 
        {
            setisDone(!isDone)
            console.log("State :",isDone)
            dispatch(OnlyDone(userinfos._id)).then((res) => {
                setAllReclamations(res.reclamations)
          
            });

        }
        console.log(isDone);

    }

    console.log("all => ", AllReclamations)
    const validateReclamation = () => {
        let isValid = true;

        let validator = Form.validator({
            content: {
                value: content,
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

    const AddReclmation = (e) => {
        e.preventDefault();
        const obj = {
            type: e.target.type.value,
            content: e.target.content.value,
        }
        const validate = validateReclamation();

        if (validate) {
            dispatch(add(obj,userinfos._id, history));
            setShow(false)

        }
    }




    const options = [
        { value: 'USER', label: 'USER' },
        { value: 'APP', label: 'APP' },
    ]

    return (

        <div>
        
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New Complaint </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="row">
                <form className="auth-form" method="POST" onSubmit={AddReclmation} autoComplete={'off'}>

                        <div className="form-group col-md-12">

                            <div className="name mb-3">

                                <label htmlFor="content">Content </label>

                                <textarea type="text" rows="10"
                                    className={`form-control ${validate.validate && validate.validate.content ? 'is-invalid ' : ''}`}
                                    id="content"
                                    name="content"
                                    value={content}
                                    placeholder="Type Your Complaint ...   "
                                    onChange={(e) => setContent(e.target.value)}

                                />
                            </div>
                            <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.content) ? 'd-block' : 'd-none'}`} >
                                {(validate.validate && validate.validate.content) ? validate.validate.content[0] : ''}
                            </div>
                            <div className="name mb-3">
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
                                </div>

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
                            <h2>My Reclamations </h2>
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                <button type="button" className="btn btn-secondary " data-toggle="dropdown"onClick={Fetch}  >
                                    GetOnllyDone
                                </button>

                            </div>
                        </div>






                        {
                            AllReclamations.map((item, index) => {
                                return (
                                    <div className="row" key={index} >
                                        <div className="col-lg-4" data-aos="fade-right">
                                            <img src="https://www.mahoninghealth.org/wp-content/uploads/Customs_and_Border_Protection_Complaints-768x485.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                            <h3>Reclamation About : {item.type}
                                            </h3>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <ul>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>content:</strong> {item.content}<span></span></li>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>dateEnvoi:</strong> <span>{format(new Date(item.dateEnvoi), "MMMM do, yyyy H:mma")}</span></li>
                                                        <li><i className="bi bi-chevron-right"></i> <strong>State:</strong>
                                                            <span>
                                                                {item.isDone == true && <p style={Done}>  Done </p>}
                                                                {item.isDone == false && <p style={Notyet}> still not treated </p>}
                                                            </span></li>
                                                        <li>
                                                            </li>
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
                                New Reclamation
                            </Button>
                        </div>

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

