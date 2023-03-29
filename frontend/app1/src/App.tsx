import './App.css'
import NewArticle from './../components/article/NewArticle';
import ListArticles from './../components/article/ListArticles';

function App() {

  return (
    <div className="App">
      <ListArticles />
      <NewArticle />
    </div>
  )
}

export default App
