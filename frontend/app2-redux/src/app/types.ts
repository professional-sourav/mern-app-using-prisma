export interface Article
{
    id: string,
    title: string,
    content: string
}

export interface ApplicationState
{
    isLoading: boolean,
    articles: Article[]
    error: any
}