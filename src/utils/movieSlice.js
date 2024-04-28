import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        popularMovies:null,
    },
    reducers:{
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        }
    }
})

export const{addPopularMovies}= movieSlice.actions;
export default movieSlice.reducer;