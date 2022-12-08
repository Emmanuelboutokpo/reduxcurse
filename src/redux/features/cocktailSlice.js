import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async() =>{
       return fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
          ).then((res)=>res.json())
});

export const fetchSingleCocktails = createAsyncThunk("cocktails/fetchSingleCocktails", async({id}) =>{
      return fetch(
         `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
         ).then((res)=>res.json())
 })

export const fetchSearchCocktails = createAsyncThunk("cocktails/fetchSearchCocktails", async({searchText}) =>{
     return fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
        ).then((res)=>res.json())
})

const cocktailSlice = createSlice({
     name : "cocktail",
     initialState :{
          cocktails:[],
          singleCockt:[],
          isLoading : false,
          isError : null
     },
     reducers :{
         
     },
     extraReducers: (builder) => {
          builder
            .addCase(fetchCocktails.pending, (state, action) => {
                  state.isLoading = true
            })
            .addCase(fetchCocktails.fulfilled, (state, action) => {
                  state.isLoading=false;
                  state.cocktails=action.payload.drinks
            })
            .addCase(fetchCocktails.rejected, (state, action) => {
               state.isLoading = false 
               state.isError = action.payload
            })  
            .addCase(fetchSingleCocktails.pending, (state, action) => {
               state.isLoading = true
         })
         .addCase(fetchSingleCocktails.fulfilled, (state, action) => {
               state.isLoading=false;
               state.singleCockt=action.payload.drinks
         })
         .addCase(fetchSingleCocktails.rejected, (state, action) => {
            state.isLoading = false 
            state.isError = action.payload
         })
         .addCase(fetchSearchCocktails.pending, (state, action) => {
            state.isLoading = true
      })
      .addCase(fetchSearchCocktails.fulfilled, (state, action) => {
            state.isLoading=false;
            state.cocktails=action.payload.drinks
      })
      .addCase(fetchSearchCocktails.rejected, (state, action) => {
         state.isLoading = false 
         state.isError = action.payload
      })  
        },
})

export default cocktailSlice.reducer;