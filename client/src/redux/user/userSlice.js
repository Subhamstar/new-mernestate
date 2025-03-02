import {createSlice, current} from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducer:{
        signInStart:(state)=>{
            state.loading=true;
        },
        signInSuccess:(state,action)=>{  //action is the data we reciver from database
            state.currentUser=action.payload;
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        }
    }
});

export const {signInStart,signInSuccess,signInFailure}=userSlice.actions;
export default userSlice.reducer;