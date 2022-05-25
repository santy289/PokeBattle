import Header from "../../components/header/Header";  
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import pokemons from '../../assets/data.json';
import './register.css';

const auth = getAuth();

function Login () {
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
      const docRef = doc(db, 'users', userCredential.user.uid);
      const newuser = { 
        pokemons: pokemons,
        avatar: "https://res.cloudinary.com/santydev/image/upload/v1652883653/675510_gmjthw.jpg",
        email: userCredential.user.email, 
        userName: values.nickname,
        history: [],
        hand: [],
        points: 0,
      } 
      await setDoc(docRef, newuser);
      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  }
return(
    <div>
        <Header />
        <div className="login__from--container">
        <Formik
            initialValues={{ 
                nickname: '', 
                email: '', 
                password: '', 
                pokemon: pokemons,
                history: [],
                points: 0,
             }}
            validate={values => {
                const errors = {};
                if (!values.nickname) {
                    errors.nickname = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.email) {
                    errors.email = 'Required';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values);
                setTimeout(() => {
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="form__container">
                    <label htmlFor="nickname">Nickname</label>
                    <Field className="home__login--input" type="text" name="nickname" placeholder="Nickname" />
                    <ErrorMessage name="nickname" component="div" />
                    <label htmlFor="email">Email</label>
                    <Field className="home__login--input" type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" component="div" />
                    <label htmlFor="password">Password</label>
                    <Field className="home__login--input" type="password" name="password" placeholder="password" />
                    <ErrorMessage name="password" component="div" />
                    <button className="home__login--button" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
        </div>
    </div>
)
}

export default Login;