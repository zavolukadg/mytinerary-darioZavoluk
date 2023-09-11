import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl.js";

const read_all_users = createAsyncThunk(
    'read_all_users',
    async () => {
        try {
            let users = await axios(apiUrl + 'users')
            console.log(users);
            return {
                users: users.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                users: []
            }
        }
    }
)

const read_user = createAsyncThunk(
    'read_user',
    async (obj) => {
        try {
            let data = await axios(apiUrl + 'users/' + obj._id)
            return {
                user: data.data.response
            }
        } catch (error) {
            return {
                user: []
            }
        }
    }
)

const signin = createAsyncThunk(
    'signin',
    async (obj) => {
        try {
            let data = await axios.post(apiUrl + 'auth/signin', obj.data)
            localStorage.setItem('user', data.data.response.user)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages:''
            }
        } catch (error) {
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const signin_token = createAsyncThunk(
    'signin_token',
    async (obj) => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: {'Authorization': `Bearer ${token}`}}
            let data = await axios.post(apiUrl + 'auth/token', null, authorization)
            localStorage.setItem('token', data.data.response.token)
            localStorage.setItem('user', data.data.response.user)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            return {
                user: {},
                token:''
            }
        }
    }
)

const signout = createAsyncThunk(
    'signout',
    async (obj) => {
        try {
            let token = localStorage.getItem('token')
            let authorization = {headers: {'Authorization': 'Bearer ' + token }}
            let data = await axios.post(apiUrl + 'auth/signout', null, authorization)
            localStorage.removeItem('token')
            localStorage.removeItem('user') 
            return {
                user: {},
            }
        } catch (error) {
            return {
                user: {},
                token:''
            }
        }
    }
)

const signup = createAsyncThunk(
    'signup',
    async (obj) => {
        try {
            let data = await axios.post(apiUrl + 'auth/register', obj.data)
            console.log(data);
            return {
                userId: data.data.response,
                messages:'User Created Successfully'
            }
        } catch (error) {
            return {
                user: {},
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const update_user = createAsyncThunk(
    'update_user',
    async (obj) => {
        try {
            let token = localStorage.getItem('token')
            let authorization = {headers: {'Authorization': 'Bearer ' + token }}
            let data = await axios.put(apiUrl + 'users', obj.data, authorization)
            return {
                user: data.data.response.user,
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
            }
        }
    }
)

const user_actions = { read_all_users, read_user, signin, signin_token, signout, signup, update_user}
export default user_actions