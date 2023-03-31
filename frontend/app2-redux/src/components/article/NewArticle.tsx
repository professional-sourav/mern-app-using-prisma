import {Formik, Form, Field} from 'formik'
import { useDispatch } from 'react-redux';
import { addArticle, postArticle } from '../../features/article/articleSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Article } from '../../app/types';

const NewArticle = () => {

    const formInitValue: Article = { id: '', title: '', content: '' };

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const handelSubmit = (value: Article) => {

        dispatch(addArticle(value))

        dispatch(postArticle(value))
    }

    return (
        <div>
            <Formik initialValues={formInitValue} onSubmit={handelSubmit}>
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title" placeholder="Title" />
                    <br />
                    <label htmlFor="content">Content</label>
                    <Field id="content" name="content" placeholder="Content" />
                    <br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default NewArticle
