import * as api from "../reclamation/endpoint_constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const add = (obj,idUser,history) => async (dispatch) => {
  try {
      const {data} = await api.add(obj,idUser);
      dispatch({ type:'CREATE', payload: data})
      history.push('/reclamation');

  }catch (error){
      console.log(error);

  }
};

export const fetchReclamation =(id) => async (dispatch) => {
  
    try {
      const {data} =  await api.fetchReclamation(id);
      dispatch ({ type: 'FETCH_ALL',  data }) ;
      return data;
    } catch (error) {
      console.log('error action',error.message);
    }
  };

  export const OnlyDone =(id) => async (dispatch) => {
  
    try {
     
      const {data} =  await api.OnlyDone(id);
     dispatch ({ type: 'FETCH_ALL_DONE',  data }) ;
      return data;
    } catch (error) {
      console.log('error action',error.message);
    }
  };

