import axios from "axios";

const API = axios.create({baseURL : "http://localhost:3000"});

export const login = (formData) =>
{
    return API.post('/auth/login', formData);
}

export const signUp = (formData) =>
{
    return API.post('/auth/signup', formData);
}