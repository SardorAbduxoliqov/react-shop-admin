import axios from "axios";

const BASE_URL = "https://shopalloma.herokuapp.com/api/";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzI5M2YxMDE3MDc3OTljNjdiNGNhOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzQ5ODYwODksImV4cCI6MTYzNTI0NTI4OX0.3e4uV-rCDTADyaIMJf8gq9dm2_xo0Dl2pxQWidYOfeg" || JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
.currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
