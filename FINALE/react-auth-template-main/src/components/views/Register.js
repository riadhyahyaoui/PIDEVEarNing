import { useState,useEffect } from "react";
import {useHistory, Link } from "react-router-dom";
import Form from '../../utilities/Forms'
import BackgroundImage from '../../assets/images/back.jpg'
import { useDispatch } from 'react-redux';
import { signup } from '../../constant/actions_constant';
import Select from 'react-select'


const Register = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [signData, setsignData] = useState({
        fullname: '', username: '', email: '', mobile: '',password: ''
      });
    const [fullname, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    
    const validateRegister = () => {
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
            password: {
                value: password,
                isRequired: true,
                minLength: 6
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

    const register = (e) => {
        e.preventDefault();
        const obj = {
			    fullname:e.target.fullname.value,
                username:e.target.username.value, 
                email: e.target.email.value, 
                password: e.target.password.value, 
               gender:e.target.gender.value, 
               address:e.target.address.value,
               mobile:e.target.mobile.value, 
               imageName:Userpicture,

		}
        const validate = validateRegister();
       
        if (validate) {
            console.log(obj)
            dispatch(signup(obj, history));

        }
    }
    let Userpicture="null";

    function fileselect(event) {

        const fileList = event.target.files;
    
        let reader = new FileReader();
        reader.readAsDataURL(fileList[0]);
        reader.onload = (event) => {
            
           
                
            Userpicture = event.target.result;
            
    
        }
    
    
    
    }  
   
    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true)
        }
    }

    const options = [
      { value: 'male', label: 'male' },
      { value: 'female', label: 'female' },
    ]


      const Regions = [
      { value: 'Ariana' , value: 'Gouvernorat de l`Ariana'},
      { value: 'Béja', label:  'Gouvernorat de Béja'},
      { value: 'Ben Arous', label: 'Gouvernorat de Ben Arous' },
      { value: 'Bizerte', label: 'Gouvernorat de Bizerte' },
      { value: 'Gabes', label:  'Gouvernorat de Gabès'},
      { value:'Gafsa' , label:  'Gouvernorat de Gafsa'},
      { value: 'Jendouba', label: 'Gouvernorat de Jendouba' },
      { value: 'Kairouan', label: 'Gouvernorat de Kairouan' },
      { value: 'Kasserine', label: 'Gouvernorat de Kasserine' },
      { value: 'Kébili', label:  'Gouvernorat de Kébili'},
      { value: 'Kef', label: 'Gouvernorat de Kef' },
      { value: 'Mahdia', label:  'Gouvernorat de Mahdia'},

      { value: 'Manouba', label: 'Gouvernorat de Manouba' },
      { value:  'Médenine' , label:'Gouvernorat de Médenine'},
      { value: 'Monastir', label:  'Gouvernorat de Monastir'},
      { value: 'Nabeul', label:  'Gouvernorat de Nabeul'},
      { value: 'Sfax' , label: 'Gouvernorat de Sfax'},
      { value: 'Sidi Bouzid' , label: 'Gouvernorat de Sidi Bouzid'},
      { value: 'Siliana', label:  'Gouvernorat de Siliana'},
      { value: 'Sousse' , label: 'Gouvernorat de Sousse'},
      { value:  'Tataouine' , label:'Gouvernorat de Tataouine'},
      { value: 'Tozeur', label:  'Gouvernorat de Tozeur'},
      { value: 'Tunis' , label: 'Gouvernorat de Tunis'},
      { value: 'Zaghouan', label:  'Gouvernorat de Zaghouan'},
      
    ]
    
    return (
        <header style={divStyle}>
            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                        <p>Create your Account</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={register} autoComplete={'off'}>

                                <div className="name mb-3">
                                    <input type="text"
                                        className={`form-control ${validate.validate && validate.validate.fullname ? 'is-invalid ' : ''}`}
                                        id="fullname"
                                        name="fullname"
                                        value={fullname}
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}

                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.fullname) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.fullname) ? validate.validate.fullname[0] : ''}
                                    </div>
                                </div>

                                <div className="name mb-3">
                                    <input type="text"
                                        className={`form-control ${validate.validate && validate.validate.username ? 'is-invalid ' : ''}`}
                                        id="username"
                                        name="username"
                                        value={username}
                                        placeholder="username"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.username) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.username) ? validate.validate.username[0] : ''}
                                    </div>
                                </div>

                                <div className="email mb-3">
                                    <input type="email"
                                        className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                                        id="email"
                                        name="email"
                                        value={email}
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                                    </div>
                                </div>
                                <div className="phone mb-3">
                                    <input type="number"
                                        className={`form-control ${validate.validate && validate.validate.mobile ? 'is-invalid ' : ''}`}
                                        id="mobile"
                                        name="mobile"
                                        value={mobile}
                                        placeholder="mobile"
                                        onChange={(e) => setMobile(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.mobile) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.mobile) ? validate.validate.mobile[0] : ''}
                                    </div>
                                </div>
                                <div className="name mb-3">
                                     <Select options={options} 
                                         className={`form-control ${validate.validate && validate.validate.gender ? 'is-invalid ' : ''}`}
                                         id="gender"
                                         name="gender"
                                         value={options.value}
                                         placeholder="Gender"
                                         onChange={(e) => setGender(options.value)}
                                         /> 


                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.gender) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.gender) ? validate.validate.gender[0] : ''}
                                    </div>
                                </div>
                                <div className="name mb-3">
                                     <Select options={Regions} 
                                         className={`form-control ${validate.validate && validate.validate.address ? 'is-invalid ' : ''}`}
                                         id="address"
                                         name="address"
                                         value={options.value}
                                         placeholder="address"
                                         onChange={(e) => setAddress(Regions.value)}
                                         /> 


                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.address) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.address) ? validate.validate.address[0] : ''}
                                    </div>
                                </div>


                                <div className="password mb-3">
                                    <div className="input-group">
                                        <input type={showPassword ? 'text' : 'password'}
                                            className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                            name="password"
                                            id="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </button>

                                        <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.password) ? 'd-block' : 'd-none'}`} >
                                            {(validate.validate && validate.validate.password) ? validate.validate.password[0] : ''}
                                        </div>
                                    </div>

                                </div>

                                <input type="file"  onChange={fileselect} accept="image/*" id="imageInput" />
                                <div className="text-center">
                                    <button id="sub_btn" type="submit">Register</button>
                                    <hr/>
                                </div>
                            </form>                                                 
                            </div>
                    </div>
                </div>
            </div>

        </header>
    );
}
const divStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export default Register;