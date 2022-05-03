import { useState } from "react";
import Form from '../../utilities/Forms'
import BackgroundImage from '../../assets/images/back.jpg'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { reset } from '../../constant/actions_constant';

const Forgot = ({ match }) => {
      
       
    
    const history = useHistory();
    const dispatch = useDispatch();
  
    const [newpassword, setNewpassword] = useState('');
    const [confirmnewpassword, setConfirmnewpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [validate, setValidate] = useState({});
  
    const validatenewpassword = () => {
        let isValid = true;

        let validator = Form.validator({
            newpassword: {
                value: newpassword,
                isRequired: true,
                minLength: 6

            },
            confirmnewpassword: {
                value: newpassword,
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

    const forget = (e) => {
        e.preventDefault();


        const obj = {
            newpassword: e.target.newpassword.value,
            confirmnewpassword: e.target.confirmnewpassword.value
        }
        const token ={
            Passwordtoken: match.params.Passwordtoken
        }
        const validate = validatenewpassword();

        if (validate) {
            if (obj.newpassword === obj.confirmnewpassword ) {
                dispatch(reset(obj,token, history));

                }
                else if (obj.newpassword != obj.confirmerMotdepasse){
                  alert( 'Les mots de passe ne sont pas identiques');
                }

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

            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                        <p>Forgot Password</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={forget} autoComplete={'off'}>
                            <div className="password mb-3">
                                        <div className="input-group">
                                            <input type={showPassword ? 'text' : 'password'}
                                                className={`form-control ${validate.validate && validate.validate.newpassword ? 'is-invalid ' : ''}`}
                                                name="newpassword"
                                                id="newpassword"
                                                value={newpassword}
                                                placeholder="Password"
                                                onChange={(e) => setNewpassword(e.target.value)}
                                            />


                                            <div className={`invalid-feedback text-start ${(validate.newpassword && validate.validate.newpassword) ? 'd-block' : 'd-none'}`} >
                                                {(validate.validate && validate.validate.newpassword) ? validate.validate.newpassword[0] : ''}
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <input type={showPassword ? 'text' : 'password'}
                                                className={`form-control ${validate.validate && validate.validate.confirmnewpassword ? 'is-invalid ' : ''}`}
                                                name="confirmnewpassword"
                                                id="confirmnewpassword"
                                                value={confirmnewpassword}
                                                placeholder="Confirm Password"
                                                onChange={(e) => setConfirmnewpassword(e.target.value)}
                                            />

                                            <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </button>

                                            <div className={`invalid-feedback text-start ${(validate.confirmnewpassword && validate.validate.confirmnewpassword) ? 'd-block' : 'd-none'}`} >
                                                {(validate.validate && validate.validate.confirmnewpassword) ? validate.validate.confirmnewpassword[0] : ''}
                                            </div>
                                        </div>
                                </div>
                                
                                <div className="text-center">
                                    <button id="sub_btn" type="submit">Save Password And Go to Login</button>

                                </div>
                            </form>

                            <hr />
                           
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