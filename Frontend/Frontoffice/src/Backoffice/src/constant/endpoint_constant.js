import axios from 'axios';

const url_makeUser ='http://localhost:5000/api/admin/superadmin/makeUser';
const url_makeAdmin ='http://localhost:5000/api/admin/superadmin/makeAdmin';
const url_getAllUser ='http://localhost:5000/api/admin/superadmin/allUsers';
const url_ban ='http://localhost:5000/api/admin/superadmin/ban';
const url_unban ='http://localhost:5000/api/admin/superadmin/unban';


 export const getAllUser = () => axios.get(url_getAllUser, {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});

export const BanUser = (email) => axios.post(url_ban,email);
export const UNBanUser = (email) => axios.post(url_unban,email, {
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});




