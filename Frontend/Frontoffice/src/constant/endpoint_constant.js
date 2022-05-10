import axios from 'axios';

const url_Register ='http://localhost:5000/api/auth/register';
const url_Login ='http://localhost:5000/api/auth/login';
const url_forgot ='http://localhost:5000/api/auth/forget';
const url_reset= 'http://localhost:5000/api/auth/reset/';
const url_activate= 'http://localhost:5000/api/auth/activate/';

const url_update= 'http://localhost:5000/api/user/update/';
const url_suggestions= 'http://localhost:5000/api/user/findNewRequest/';
const url_allFriends= 'http://localhost:5000/api/user/getAll/';

const url_follow= 'http://localhost:5000/api/user/follow/';
const url_unfollow= 'http://localhost:5000/api/user/unfollow/';


const getFollowers= 'http://localhost:5000/api/user/getFollowers/';
const getFollowing= 'http://localhost:5000/api/user/getFollowing/';

const url_logout ='http://localhost:5000/api/auth/logout';
const url_deleteUser ='http://localhost:5000/api/user/deleteUser/';



export const signUp = (signData) => axios.post(url_Register, signData, {
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});
export const signIn = (signinData) => axios.post(url_Login, signinData, {
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});
export const Sendfollow = (id1,id2) => axios.post(url_follow+id1+"/"+id2, {
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});
export const SendUnfollow = (id1,id2) => axios.post(url_unfollow+id1+"/"+id2, {
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});


export const forgetpass = (emailData) => axios.post(url_forgot,emailData, 
    {
    method: 'POST',
    headers: {
        
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});
 export const restpass = (obj,token) =>axios.post(url_reset+token,obj);
 export const activate = (token) =>axios.put(url_activate+token);
 export const update = (obj,id) =>axios.put(url_update+id,obj);

 export const GetSuggestions = (id) => axios.get(url_suggestions+id, {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});

export const GetAll = (id) => axios.get(url_allFriends+id, {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});
export const GetOnlyFollowers = (id) => axios.get(getFollowers+id, {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});
export const GetOnlyFollowing = (id) => axios.get(getFollowing+id, {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});
export const logout = () => axios.post(url_logout, 
    {
    method: 'POST',
    headers: {
        
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});

export const deleteUser = (id) => axios.delete(url_deleteUser+id, 
    {
    method: 'DELETE',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});


