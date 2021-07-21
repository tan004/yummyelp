import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory,Link } from "react-router-dom";
import { login } from "../../store/session";
import './LoginForm.css';

const LoginFormPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        const validator = []
        if (!username) validator.push('Please provide a valid username')
        if (!password) validator.push('Please provide a valid password')
        setErrors(validator)
        return () => setErrors([]);
    }, [username, password])

    if (sessionUser) return (
        <Redirect to='/' />
    )

    const handleForm = async (e) => {
        e.preventDefault();

        const form = {
            credential: username,
            password
        }
        try {
            let user = await dispatch(login(form));
            if (user === undefined) {
                throw Error('please login first')
            }else{

                history.push('/')
            }
            reset();
        } catch (err) {
            let data = await err.json()
            setErrors(data.errors)
        }
    }

    const demoUser = async () => {
        const form ={
            credential: 'demo',
            password: 'password'
        }

        let user = await dispatch(login(form));
            if (user === undefined) {
                throw Error('please login first')
            }else{

                history.push('/')
            }

    }

    const reset = () => {
        setUsername('')
        setPassword('')
    }

    return (
        <div className='form__container'>
        <div className='login-form__container'>
            <h1 className='header'>Login In to Yummylep</h1>
            <div className='errors__container'>
                <ul>
                    {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            </div>
            <form onSubmit={handleForm}>
                <div className='input__container'>
                    <label htmlFor='username'>
                        <p>User Name: </p>
                        <input type='text'
                            className="text-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                    </label>
                </div>

                <div className='input__container'>
                    <label htmlFor='password'>
                        <p>Password:</p>
                        <input type='password'
                            className="text-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </label>
                </div>
                <div className='submit-button__container'>
                <button type='submit'
                    className='submit-button'
                    // disabled={errors.length ? true : false}
                >Submit
                </button>

            </div>
            </form>
            <button onClick={demoUser} className='demo-button'>Demo User</button>
            <small>New to Yummylep? <Link to='/signup'>Sign up</Link></small>

            <div className='login-form__img'>
                <img alt='' src='https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png'></img>
            </div>
        </div>
        </div>
    )
}

export default LoginFormPage;
