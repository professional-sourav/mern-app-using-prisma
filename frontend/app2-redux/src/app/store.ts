import { configureStore } from '@reduxjs/toolkit'
import { articleSlice } from '../features/article/articleSlice'

export const store = configureStore({
    reducer: articleSlice.reducer
})