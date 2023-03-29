"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const article_1 = require("./models/article");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send("Welcome to the MERN APP");
});
router.get('/articles', (req, res) => {
    (0, article_1.getArticles)()
        .then(articles => res.send(articles));
    // res.send(response);
});
router.post('/articles', (req, res) => {
    const response = (0, article_1.createArticle)(req.body);
    res.send(response);
});
exports.default = router;
