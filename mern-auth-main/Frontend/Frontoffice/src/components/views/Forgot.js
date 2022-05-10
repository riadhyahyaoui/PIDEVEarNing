import { useState } from "react";
import { Link } from "react-router-dom";
import Form from '../../utilities/Forms'
import BackgroundImage from '../../assets/images/back.jpg'
import { useDispatch } from 'react-redux';
import { forgetpassword } from '../../constant/actions_constant';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";

const Forgot = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
  
    const [email, setEmail] = useState('');
    const [validate, setValidate] = useState({});

    const validateEmail = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true
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

    const forget = (e) => {
        e.preventDefault();


        const obj = {
            email: e.target.email.value,
        }
        const validate = validateEmail();

        if (validate) {
            console.log(obj)
            dispatch(forgetpassword(obj, history));

        }
    }


    return (
<header style={divStyle}>

            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                        <p>Forgot Password</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={forget} autoComplete={'off'}>
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
                                
                                <div className="text-center">
                                    <button id="sub_btn" type="submit">Forgot Password</button>

                                </div>
                            </form>

                            <hr />
                            <footer className="text-center ">
                                <div className="buttons text-center">

                                    <Link to="/login">
                                        <button className="primary-button" id="reg_btn"><span> login</span></button>
                                    </Link>
                                </div>

                            </footer>
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
export default Forgot;