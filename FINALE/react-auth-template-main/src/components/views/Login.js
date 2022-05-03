import { useState } from "react";
import { Link } from "react-router-dom";
import Form from '../../utilities/Forms'
import BackgroundImage from '../../assets/images/back.jpg'
import { ToastContainer, toast } from 'react-toastify';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signinuser } from '../../constant/actions_constant';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateLogin = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            },
            password: {
                value: password,
                isRequired: true,
                minLength: 6
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }

    const authenticate = (e) => {
        e.preventDefault();


        const obj = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log(obj);
        
        const validate = validateLogin();

        if (validate) {
            dispatch(signinuser(obj, history));

        }
    }

    const togglePassword = (e) => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true)
        }
    }

    return (
        <header style={divStyle}>
            <div >
                <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                    <div className="auth-background-holder"></div>
                    <div className="auth-background-mask"></div>
                </div>

                <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                    <div className="d-flex flex-column align-content-end">
                        <div className="auth-body mx-auto">
                            <p>Login to your account</p>
                            <div className="auth-form-container text-start">
                                <form className="auth-form" method="POST" onSubmit={authenticate} autoComplete={'off'}>
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


                                        <div className="extra mt-3 row justify-content-between">
                                            <div className="col-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="remember" checked={remember} onChange={(e) => setRemember(e.currentTarget.checked)} />
                                                    <label className="form-check-label" htmlFor="remember">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="right-label">
                                                    <Link to="/forgot-password"><label className="right-label">Forget password?</label></Link>
                                                </div>
                                                <br />
                                                <div className="right-label">
                                                    <Link to="/register"><label className="right-label">Register?</label></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button id="sub_btn" type="submit">Log In</button>

                                    </div>
                                </form>

                                <hr />
                                <footer className="text-center ">
                                    <div className="buttons text-center">

                                        <Link className="text-link" to="/" ><button className="primary-button" id="reg_btn"><span>Home</span></button> </Link></div>




                                </footer>
                            </div>
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
export default Login;