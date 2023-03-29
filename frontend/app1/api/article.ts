export const articles = async () => {

    const articlesData = await fetch('http://localhost:5000/articles')

    return articlesData.json();
}

export const postArticle = async (data: any) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const articlesData = await fetch(
        'http://localhost:5000/articles',
        requestOptions
    )

    return articlesData.json();
}