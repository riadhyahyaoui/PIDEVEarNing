import * as api from '../constant/endpoint_constant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { loginFailure, loginStart, loginSuccess } from "../components/MarketPlace/redux/userRedux";

export const signup = (signData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(signData);
        console.log(data)
        // dispatch({ type:'auth', data });
        dispatch(loginSuccess(data.user));

        navigate('/');
        toast.success(`Bienvenue ${data.user} !`);
    } catch (error) {
        console.log(error);
    }
};

// export const ErrorsAccount=(navigate)=> async(dispatch)=>{
//     const data=null;
//     dispatch({ type: 'auth',data  });

//     navigate("/login")

// }
 

export const Sendfollow = (id1,id2,navigate) => async (dispatch) => {
    try {
        const { data } = await api.Sendfollow(id1,id2);
        console.log(data)
        dispatch({ type: 'SEND_FOLLOW', data });
       navigate('/contact');
        // alert(' Vous  !');
    } catch (error) {
        console.log(error);
    }
};
export const SendUnfollow = (id1,id2,navigate) => async (dispatch) => {
    try {
        const { data } = await api.SendUnfollow(id1,id2);
        console.log(data)
        dispatch({ type: 'SEND_UNFOLLOW', data });
       navigate('/suggestions');
        // alert(' Vous  !');
    } catch (error) {
        console.log(error);
    }
};

export const signinuser = (signinData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(signinData);
        console.log(signinData)
        console.log(data)
        // dispatch({ type: 'auth', data });
        dispatch(loginSuccess(data.user));

        if (data.user.role === 'user') {
            navigate('/Profil');//USER
            toast.success(`Bienvenue ${data.user} !`);

        }
        else if
            (data.user.role === 'admin') {//dashboard
            toast.success(`Bienvenue ${data.user} !`);
            navigate('/back');
        }

    } catch (error) {
        console.log(error);
        alert("Email ou mot de passe invalide")
    }
};

export const reset = (obj, token, navigate) => async (dispatch) => {
    try {
        console.log(obj, token.Passwordtoken)
        const { data } = await api.restpass(obj, token.Passwordtoken);
        dispatch ({type:'reset', data });
        alert(' Votre mot de passe a été modifier avec succées! ');
        navigate('/login');
    } catch (error) {
        toast.error(' Lien invalide ');

    }
};

export const forgetpassword = (emailData, navigate) => async (dispatch) => {

    try {
        const { data } = await api.forgetpass(emailData);

        dispatch({ type: 'forget', data });
        alert('Un email a été  envoye, Verifier votre boite mail ' + data.foundUser.email);

        //toast.success(' Un email a été  envoye, Verifier votre boite mail ');

    } catch (error) {
        console.log(error);
        toast.error('Email introuvable');
    }
};
export const activateAccount = (token, navigate) => async (dispatch) => {
    try {
        const { data } = await api.activate(token.secretToken);
        console.log(data)
        dispatch({ type: 'activate', data });
        alert(' Votre compte a été verifié Vous pouvez acceder a votre compte');
        navigate('/login');
    } catch (error) {
        toast.error(' Lien invalide ');

    }
};

export const updateProfil = (obj,id, navigate) => async (dispatch) => {
    try {
        const { data } = await api.update(obj,id);
        dispatch({ type: 'update', data });
        navigate('/Profil');
        alert(' Votre compte a été modifé !');
    } catch (error) {
        console.log(error);
    }
};


export const GetSuggestions =(id) => async (dispatch) => {
  
    try {
      const {data} =  await api.GetSuggestions(id);
      dispatch ({ type: 'FETCH_SUGGESTIONS',  data }) ;
     return data;
    } catch (error) {
      console.log('error action',error.message);
    }
  };

export const GetAll=(id) => async (dispatch) => {
  
    try {
      const {data} =  await api.GetAll(id);
      dispatch ({ type: 'FETCH_ALL_FRIENDS',  data }) ;
     return data;
    } catch (error) {
      console.log('error action',error.message);
    }
  };

  export const GetOnlyFollowers=(id) => async (dispatch) => {
  
    try {
      const {data} =  await api.GetOnlyFollowers(id);
      dispatch ({ type: 'FETCH_Only_Followers',  data }) ;
     return data;
    } catch (error) {
      console.log('error action',error.message);
    }
  };

  export const GetOnlyFollowing=(id) => async (dispatch) => {
  
    try {
      const {data} =  await api.GetOnlyFollowing(id);
      dispatch ({ type: 'FETCH_Only_Following',  data }) ;
     return data;
    } catch (error) {
      console.log('error action',error.message);
    }
  };
  export const logout = (navigate) => async (dispatch) => {
    try {
        const { data } = await api.logout();
        dispatch({ type: 'logout', data });
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};

export const desactiver = (id,navigate) => async (dispatch) => {
    try {
        const { data } = await api.deleteUser(id);
        dispatch({ type: 'DELETE', data });
        navigate('/');
    } catch (error) {
        console.log(error);
    }
};
 
 