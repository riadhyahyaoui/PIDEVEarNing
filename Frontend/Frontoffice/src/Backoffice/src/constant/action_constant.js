import * as api from '../constant/endpoint_constant';



export const GetUsers =() => async (dispatch) => {
  
    try {
      const {data} =  await api.getAllUser();
      dispatch ({ type: 'FETCH_USERS',  data }) ;
     return data;
    } catch (error) {
      console.log('error action',error.message);
    }
  };

  export const BanUser = (email,history) => async (dispatch) => {
    try {
      console.log("data");
      console.log(email);
        
     
      const { data } = await api.BanUser(email);
        console.log(data);
        history("/back/users");


        console.log(email);
    } catch (error) {
        console.log(error);
    }
};
export const UNBanUser = (email,history) => async (dispatch) => {
  try {
      const { data } = await api.UNBanUser(email);
      history("/back/users");

  } catch (error) {
      console.log(error);
  }
};