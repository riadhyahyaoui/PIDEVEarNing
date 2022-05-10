
import BackgroundImage from '../../assets/images/back.jpg'
import { useNavigate } from 'react-router-dom';

const Errors = ({  }) => {
    const history = useNavigate();

    
   

    const active = () => {
        //dispatch(ErrorsAccount(token, history));
        history("/login")
    }



    return (
        <header style={divStyle}>

            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                <div className="d-flex flex-column align-content-end">
                    <div className="auth-body mx-auto">
                        <p>Forgot Password</p>
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={active} autoComplete={'off'}>

                                <p style={color}>You must login  </p>

                                <div className="text-center">
                                    <button id="sub_btn" type="submit">Go To Login </button>

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
const color = {
    color: "#222"
}
const divStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export default Errors;