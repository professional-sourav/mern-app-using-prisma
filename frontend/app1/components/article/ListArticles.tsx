import {useQueryClient, useQuery} from 'react-query'
import { articles } from './../../api/article';
import Article from './Article';

const ListArticles = () => {

    const queryClient = useQueryClient()

    const query = useQuery('articles', articles)

    return (
        <div>
            { query.isLoading && <p>Loading articles</p> }
            { query.isSuccess && query.data.map(article => <Article key={article.id} {...article} />) }
        </div>
    )
}

export default ListArticles
