import * as api from "../music/endpoint_constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const add = (formData,idUser,navigate) => async (dispatch) => {
  try {
      const {data} = await api.add(formData,idUser);
      dispatch({ type:'UPLOAD', payload: data})
      navigate('/music');

  }catch (error){
      console.log(error);

  }
};

export const shareWith = (id,navigate) => async (dispatch) => {
  try {
      const {data} = await api.ShareMusic(id);
      dispatch({ type:'SHARE', payload: data})
      navigate("/AllMusic")

  }catch (error){
      console.log(error);

  }
};
export const fetchSharedMusic =() => async (dispatch) => {
  
  try {
    const {data} =  await api.fetchSharedMusic();
    dispatch ({ type: 'FETCH_ONLY_SHARED',  data }) ;
    return data;
  } catch (error) {
    console.log('error action',error.message);
  }
};
export const pushView = (id,idUser) => async (dispatch) => {
  try {
    const {data} =  await api.pushView(id,idUser);
    console.log(data)
    dispatch ({ type: 'FETCH_UPDATE',  data }) ;
    } catch (error) {
      console.log(error);
  }
};



export const fetechMusicsDetails =(id) => async (dispatch) => {
  
    try {
      const {data} =  await api.fetechMusicsDetails(id);
      dispatch ({ type: 'FETCH_ALL',  data }) ;
      return data;
    } catch (error) {
      console.log('error action',error.message);
    }
  };
  export const fetechMusic =(id) => async (dispatch) => {
  
    try {
      const {data} =  await api.fetechMusic(id);
      dispatch ({ type: 'FETCH',  data }) ;
      return data;
    } catch (error) {
      console.log('error action',error.message);
    }
  };

//   export const OnlyDone =(id) => async (dispatch) => {
  
//     try {
     
//       const {data} =  await api.OnlyDone(id);
//      dispatch ({ type: 'FETCH_ALL_DONE',  data }) ;
//       return data;
//     } catch (error) {
//       console.log('error action',error.message);
//     }
//   };

