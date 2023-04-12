import {createSlice} from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState:{
        loading:true,
        isAuthenticated:false,
    },
    reducers:{
        loginRequest(state, action){
            return{
                ...state,
                loading: true,
            }
        },
        loginSuccess(state, action){
            return{
                loading: false, 
                isAuthenticated: true,
                user: action.payload
            }
        },
        loginFail(state, action){
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        },
        logOut(state, action) {
            return{
            loading: false,
            isAuthenticated: false
            }

          }
    }
});

const { actions, reducer} = loginSlice;

export const{loginRequest,loginSuccess,loginFail, logOut, clearError}= actions;

export default reducer;