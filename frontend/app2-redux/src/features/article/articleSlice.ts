import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import nextId from "react-id-generator";
import { ApplicationState, Article } from '../../app/types'

const API_URL = 'http://localhost:5000/articles';

const articleInitialState: ApplicationState = {
    
    isLoading: false,
    articles: [],
    error: null
}

export const fetchArticles = createAsyncThunk(
    'posts/fetchArticles',
    async () => {
        
        // try {
        //     const response = await axios(API_URL)
        //     return [...response.data]
        // } catch(err: any) {
        //     return err.message
        // }

        return axios(API_URL)
        .then(response => response.data)
        .catch(err => {
            console.log(err.message);
        })
    }
)

export const postArticle = createAsyncThunk(
    'posts/postArticles',
    async (data: Article) => {
        console.log("From PostArticle AsyncThunk", data);
        
        try {
            await axios.post(API_URL, data)
        } catch(err: any) {
            return err.message
        }
    }
)

export const articleSlice = createSlice({
    name: 'article',
    initialState: articleInitialState,
    reducers: {
        addArticle: (state, action) => {
            console.log(action.payload);
            const payload = action.payload
            payload.id = nextId() // fake id to avoid the error
            state.articles.push(payload)
            // state.articles =[...state.articles, payload]
            // return state   
        }
    },
   extraReducers(builder) {
       builder
       .addCase(fetchArticles.pending, (state, action) => {
            state.isLoading = true
       })
       .addCase(fetchArticles.rejected, (state, action) => {
            state.error = action.payload
       })
       .addCase(fetchArticles.fulfilled, (state, action) => {
            state.articles = action.payload
            state.isLoading = false
       })
       .addCase(postArticle.pending, (state, action) => {
            console.log("Articles creting");
       })
       .addCase(postArticle.rejected, (state, action) => {
        console.error("Something is wrong while creating the article");
       })
       .addCase(postArticle.fulfilled, (state, action) => {
            
            console.log("Articles created");
       })
   }, 
})

export const { addArticle } = articleSlice.actions;