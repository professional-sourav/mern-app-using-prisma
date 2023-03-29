import { PrismaClient } from '@prisma/client';

interface Author
{
    id: string,
    name: string,
    email: string,
    avatar: string
}

interface Article
{
    id: string,
    title: string,
    content: string,
    created_at?: Date,
    author: Author
}

const prisma = new PrismaClient()

export const getArticles = async () => {

    const articles = await prisma.article.findMany({
        include: {
            author: {
                select: {
                    name: true
                }
            }
        }
    })

    return articles;
}

export const createArticle = async (params: Article) => {

    await prisma.$connect().catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
    
    await prisma.article.create({
        data: {
            title: params.title,
            content: params.content,
            author: {
                create: {
                    name: "Test",
                    email: "test@apple.com"
                }
            }
        }
    }).catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
}