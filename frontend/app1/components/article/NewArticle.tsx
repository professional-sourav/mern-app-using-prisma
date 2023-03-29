import { Formik, Field, Form } from 'formik'
import { useQueryClient, useMutation } from 'react-query';
import { postArticle } from '../../api/article';

const NewArticle = () => {

  const queryClient = useQueryClient();

  // const handleSubmit = (values: any) => {
  //   console.log(values);

  //   const mutation = useMutation(postArticle, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('articles')
  //     }
  //   })

  //   mutation.mutate(values);
  // }

  const mutation = useMutation(postArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries('articles')
    }
  })

  return (
    <div>
      <h4>Add New Article</h4>
      <Formik       
        initialValues={{
          title: '',
          content: ''
        }}         
        onSubmit={(values) => mutation.mutate(values)}
        >
        <Form>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="Article's title" />
          <br />
          <label htmlFor="content">Content</label>
          <Field
            id="content"
            name="content"
            placeholder="Article content"
            type="text"
          /><br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default NewArticle
