import axios from 'axios';

const url_UploadMusic ='http://localhost:5000/api/Music/UploadMusic/';
const url_fetechMusicsDetails='http://localhost:5000/api/music/fetechMusicsDetails/';
const url_DownloadMusic='http://localhost:5000/api/music/';
const url_fetchSharedMusic='http://localhost:5000/api/music/fetchSharedMusic';
const url_IncViews='http://localhost:5000/api/music/pushView/';
const url_Share='http://localhost:5000/api/music/ShareMusic/';



export const add = (formData,idUser) => axios.post(url_UploadMusic+idUser,formData, {
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
},);
export const ShareMusic = (id) =>axios.post(url_Share+id,{
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
},);

export const pushView = (id,idUser) =>axios.post(url_IncViews+id+"/"+idUser,{
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
},);


export const fetchSharedMusic = () => axios.get(url_fetchSharedMusic, {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});
export const fetechMusicsDetails = (id) => axios.get(url_fetechMusicsDetails+id, {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});

export const fetechMusic= (id) => axios.get(url_DownloadMusic+id, {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});
    // export const OnlyDone = (id) => axios.get(url_OnlyDone+id, {
    //     method: 'GET',
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //     }
    // });

