import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchArticles } from './../../features/article/articleSlice';
import Article from './Article';

const Articles = () => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch()    
    
    useEffect(() => {
        dispatch(fetchArticles())
    }, [])
    
    return (
        <div>
            { state.isLoading && <p>Loading articles...</p> }
            {
                state.articles &&
                state.articles.map((article) => <Article key={article.id} {...article} />)
            }
        </div>
    )
}

export default Articles
