import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format } from "date-fns";
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select'
import Form from '../../utilities/Forms'
import { useNavigate } from 'react-router-dom';
import { updateProfil } from '../../constant/actions_constant';
import NavBarProfil from "./NavBarProfil";
import {useSelector} from "react-redux";


const Profil = ({ match }) => {

  const history = useNavigate();
  const dispatch = useDispatch();
  //const [userinfos, setuserinfos] = useState(JSON.parse(localStorage.getItem('profile')));
  const userinfos = useSelector(state =>state.user.currentUser);

  const [Data, setData] = useState(userinfos);
  const { username, fullname, email, address, password, gender, mobile, role, createdAt, image } = Data;
  const [userData, setuserData] = useState({ username, fullname, email, address, password, gender, mobile, role, createdAt, image })

  const [validate, setValidate] = useState({});
  const [modalData, setmodalData] = useState({ username, fullname, email, address, gender, mobile, createdAt, image })



  //2eme methde 
  const [fullnameModal, setNameModal] = useState('');
  const [usernameModal, setUsernameModal] = useState('');
  const [emailModal, setEmailModal] = useState('');
  const [mobileModal, setMobileModal] = useState('');
  const [genderModal, setGenderModal] = useState('');
  const [addressModal, setAddressModal] = useState('');
  // Modal init 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const Nbr = 5;
  // const token = {
  //   secretToken: match.params.secretToken
  // }
  const validateUpdate = () => {
    let isValid = true;

    let validator = Form.validator({
      fullname: {
        value: fullname,
        isRequired: true,
      },
      username: {
        value: username,
        isRequired: true,
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true
      },

      mobile: {
        value: mobile,
        isRequired: true,
        minLength: 8
      },
      gender: {
        value: gender,
      },
      address: {
        value: address,
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


  const options = [
    { value: 'male', label: 'male' },
    { value: 'female', label: 'female' },
  ]


  const Regions = [
    { value: 'Ariana', value: 'Gouvernorat de l`Ariana' },
    { value: 'Béja', label: 'Gouvernorat de Béja' },
    { value: 'Ben Arous', label: 'Gouvernorat de Ben Arous' },
    { value: 'Bizerte', label: 'Gouvernorat de Bizerte' },
    { value: 'Gabes', label: 'Gouvernorat de Gabès' },
    { value: 'Gafsa', label: 'Gouvernorat de Gafsa' },
    { value: 'Jendouba', label: 'Gouvernorat de Jendouba' },
    { value: 'Kairouan', label: 'Gouvernorat de Kairouan' },
    { value: 'Kasserine', label: 'Gouvernorat de Kasserine' },
    { value: 'Kébili', label: 'Gouvernorat de Kébili' },
    { value: 'Kef', label: 'Gouvernorat de Kef' },
    { value: 'Mahdia', label: 'Gouvernorat de Mahdia' },

    { value: 'Manouba', label: 'Gouvernorat de Manouba' },
    { value: 'Médenine', label: 'Gouvernorat de Médenine' },
    { value: 'Monastir', label: 'Gouvernorat de Monastir' },
    { value: 'Nabeul', label: 'Gouvernorat de Nabeul' },
    { value: 'Sfax', label: 'Gouvernorat de Sfax' },
    { value: 'Sidi Bouzid', label: 'Gouvernorat de Sidi Bouzid' },
    { value: 'Siliana', label: 'Gouvernorat de Siliana' },
    { value: 'Sousse', label: 'Gouvernorat de Sousse' },
    { value: 'Tataouine', label: 'Gouvernorat de Tataouine' },
    { value: 'Tozeur', label: 'Gouvernorat de Tozeur' },
    { value: 'Tunis', label: 'Gouvernorat de Tunis' },
    { value: 'Zaghouan', label: 'Gouvernorat de Zaghouan' },

  ]
  const update = (e) => {

    const validate = validateUpdate();

    if (validate) {

      setuserData(modalData)
      dispatch(updateProfil(modalData, userinfos._id, history));

    }
  }

  return (
    <div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>

        </Modal.Header>
        <Modal.Body>
          {/* <form className="auth-form" method="POST" onSubmit={update} autoComplete={'off'}> */}

          <div className="row">
            <div className="form-group col-md-6">
              <div className="name mb-3">

                <label for="fullname">Full Name </label>

                <input type="text"
                  className={`form-control ${validate.validate && validate.validate.fullname ? 'is-invalid ' : ''}`}
                  id="fullname"
                  name="fullname"
                  defaultValue={userData.fullname}
                  placeholder="fullname"
                  onChange={(e) => setmodalData({ ...modalData, fullname: e.target.value })}
                // onChange={(e) => setNameModal(e.target.value)}

                />
              </div>
              <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.fullname) ? 'd-block' : 'd-none'}`} >
                {(validate.validate && validate.validate.fullname) ? validate.validate.fullname[0] : ''}
              </div>
            </div>



            <div className="form-group col-md-6">
              <label for="username">Username</label>
              <div className="name mb-3">
                <input type="text"
                  className={`form-control ${validate.validate && validate.validate.username ? 'is-invalid ' : ''}`}
                  id="username"
                  name="username"
                  defaultValue={userData.username}
                  placeholder="username"
                  onChange={(e) => setmodalData({ ...modalData, username: e.target.value })}
                // onChange={(e) => setUsernameModal(e.target.value)}

                />


                <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.username) ? 'd-block' : 'd-none'}`} >
                  {(validate.validate && validate.validate.username) ? validate.validate.username[0] : ''}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="email">Your Email</label>

              <div className="email mb-3">
                <input type="email"
                  className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                  id="email"
                  name="email"
                  defaultValue={userData.email}
                  placeholder="Email"
                  onChange={(e) => setmodalData({ ...modalData, email: e.target.value })}
                //onChange={(e) => setEmailModal(e.target.value)}

                />

                <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                  {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                </div>
              </div>
            </div>
            <div className="form-group col-md-6">
              {/*       <label for="mobile">Gender </label>

              <Select options={options}

                className={`form-control ${validate.validate && validate.validate.gender ? 'is-invalid ' : ''}`}
                id="gender"
                name="gender"
                value={fullnameModal}
                defaultInputValue={userData.gender}
                placeholder={userData.gender}
                //onChange={() => setmodalData({...modalData, gender: options.value })}
                onChange={(e) => setGenderModal(options.value)}

              /> */}


              <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.gender) ? 'd-block' : 'd-none'}`} >
                {(validate.validate && validate.validate.gender) ? validate.validate.gender[0] : ''}
              </div>

            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="mobile">Phone </label>
              <div className="phone mb-3">
                <input type="number"
                  className={`form-control ${validate.validate && validate.validate.mobile ? 'is-invalid ' : ''}`}
                  id="mobile"
                  name="mobile"
                  defaultValue={userData.mobile}
                  placeholder="mobile"
                  onChange={(e) => setmodalData({ ...modalData, mobile: e.target.value })}
                // onChange={(e) => setMobileModal(e.target.value)}

                />

                <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.mobile) ? 'd-block' : 'd-none'}`} >
                  {(validate.validate && validate.validate.mobile) ? validate.validate.mobile[0] : ''}
                </div>
              </div>

            </div>
            {/*          
            <label for="address">Address </label>

            <Select options={Regions}

              className={`form-control ${validate.validate && validate.validate.address ? 'is-invalid ' : ''}`}
              id="address"
              name="address"
              defaultValue={userData.address}
              defaultInputValue={userData.address}
              placeholder={userData.address}
              onChange={(e) => setmodalData({...modalData,address: options.value })}
            // onChange={() => setAddressModal(Regions.value)}

            /> */}


            <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.address) ? 'd-block' : 'd-none'}`} >
              {(validate.validate && validate.validate.address) ? validate.validate.address[0] : ''}
            </div>

          </div>
          {/* </form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button
            // disabled={ modalData.address === "" || modalData.email === "" ? false : true }

            type="submit"
            variant="primary" onClick={update}>
            Save Changes
          </Button>

        </Modal.Footer>
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
              <h2>About</h2>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src={userData.image} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3> {userData.role}</h3>

                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Fullname:</strong> <span>{userData.fullname}</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>UserName:</strong> <span>{userData.username}</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{userData.email}</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Your account has been created at :</strong> <span>{format(new Date(userData.createdAt), "MMMM do, yyyy H:mma")
                      }</span></li>

                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Gender:</strong> <span>{userData.gender}</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{userData.mobile}</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{userData.address}</span></li>

                    </ul>
                  </div>
                </div>

              </div>
            </div>
            <div className="text-center">
              {/* <button  data-toggle="modal" data-target="#update">Update</button>  */}
              <Button variant="primary" onClick={handleShow}>
                Update Profil
              </Button>
            </div>

          </div>
        </section>
        {/* <!-- End About Section --> */}

      </main>
      {/* <!-- End #main --> */}



      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>



    </div>
  );

}
export default Profil; 