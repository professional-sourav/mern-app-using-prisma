import express, { Request, Response, Router } from "express";
import { createArticle, getArticles } from './models/article';

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {

    res.send("Welcome to the MERN APP");
})

router.get('/articles', (req: Request, res: Response) => {

    getArticles()
        .then(articles => res.send(articles))

    // res.send(response);
})

router.post('/articles', (req: Request, res: Response) => {

    const response = createArticle(req.body)

    res.send(response);
})

export default router;