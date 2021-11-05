import axios from "axios";

const BASE_URL = "https://shopalloma.herokuapp.com/api/";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzQxMTYyNzFmYzE4NTYzNTY2NGQ5MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjEyOTc4OSwiZXhwIjoxNjM2Mzg4OTg5fQ.fZJ1Df3dRQLeFS8RTXnRZaTdi2BDWM8mgAAQ13myJDw" ||
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
