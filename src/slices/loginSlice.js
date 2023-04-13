import {createSlice} from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState:{
        loading:true,
        isAuthenticated:false,
        error:"",
        errorMsg:""
    },
    reducers:{
        loginRequest(state, action){
            return{
                ...state,
                loading: true
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

          },
          signupReq(state, action){
            return{
                ...state,
                loading: true
            }
          },
          signupSuccess(state,action){
            return{
                loading: false, 
                isAuthenticated: true,
                user: action.payload
            }
          },
          signupFail(state,action){
            return{
                ...state,
                loading: false,
                errorMsg: action.payload
            }
          }
    }
});

const { actions, reducer} = loginSlice;

export const{loginRequest,loginSuccess,loginFail, logOut, signupReq,signupSuccess,signupFail}= actions;

export default reducer;