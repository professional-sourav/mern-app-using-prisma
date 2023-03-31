import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchArticles } from './../../features/article/articleSlice';
import Article from './Article';
import { ApplicationState } from '../../app/types';
import { ThunkDispatch } from '@reduxjs/toolkit';

const Articles = () => {

    const state = useSelector((state: ApplicationState) => state)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()    
    
    useEffect(() => {
        dispatch(fetchArticles())
    }, [])    
    
    return (
        <div>
            { state.isLoading && <p>Loading articles...</p> }
            {
                state.articles &&
                state.articles?.map((article) => <Article key={article.id} {...article} />)
            }
        </div>
    )
}

export default Articles
