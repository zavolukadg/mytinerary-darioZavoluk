import { createReducer } from "@reduxjs/toolkit";
import users_actions from "../actions/users";
const {read_all_users, read_user,signin,signout, signin_token, signup, update_user} = users_actions;

const initial_state = {
    users:[],
    user:{},
    token: '',
    messages:[]
}

const users_reducer = createReducer(
    initial_state,
    build=> build.addCase(
        read_all_users.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                users: action.payload.users
            }
            return new_state
        }
    )
    .addCase(
        read_user.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.users
            }
            return new_state
        }
    ).addCase(
        signin.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                messages: action.payload.messages
            }
            return new_state
        }
    ).addCase(
        signin_token.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        signout.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        signup.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                messages: action.payload.messages
            }
            return new_state
        }
    )
    .addCase(
        update_user.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
            }
            return new_state
        }
    )
)

export default users_reducer


