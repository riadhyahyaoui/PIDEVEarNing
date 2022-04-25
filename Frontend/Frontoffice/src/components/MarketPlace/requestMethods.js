import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjNlMmE1M2JkZWI2NTZlMmVhNjY0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDg0MjQwMywiZXhwIjoxNjUxMTAxNjAzfQ.HrMmLi5yxfl7xuT1d-IckH2u6HcASuMlFqBYcyHLT44"
//  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//  .accessToken || "";
/*
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
*/
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});