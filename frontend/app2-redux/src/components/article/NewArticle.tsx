import {Formik, Form, Field} from 'formik'
import { useDispatch } from 'react-redux';
import { addArticle, postArticle } from '../../features/article/articleSlice';

const NewArticle = () => {

    const dispatch = useDispatch();

    const handelSubmit = (value: any) => {

        dispatch(addArticle(value))

        dispatch(postArticle(value))
    }

    return (
        <div>
            <Formik initialValues={{ title: '', content: '' }} onSubmit={handelSubmit}>
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
