import axios from 'axios';

const url_add ='http://localhost:5000/api/reclamation/add/';
const url_Consult='http://localhost:5000/api/reclamation/consultReclamation/';
const url_OnlyDone ='http://localhost:5000/api/reclamation/OnlyDone/';




export const add = (data,idUser) => axios.post(url_add+idUser, data, {
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
},);

export const fetchReclamation = (id) => axios.get(url_Consult+id, {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});

    export const OnlyDone = (id) => axios.get(url_OnlyDone+id, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    });

