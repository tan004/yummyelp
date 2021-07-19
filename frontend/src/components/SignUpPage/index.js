import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { useDispatch,useSelector } from "react-redux";
import { signup } from "../../store/session";


const Signup =() =>{

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    // const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        const validator = []
        if (!username) validator.push('Please provide a valid username')
        if (!email) validator.push('Please provide a valid username')
        if (!confirmPassword) validator.push('Please provide a valid username')
        if (!password) validator.push('Please provide a valid password')
        setErrors(validator)
        return () => setErrors([]);
    }, [username, password,email,confirmPassword])

    if (sessionUser) return <Redirect to="/" />;

    const handleForm = async (e) => {
        e.preventDefault();
        if(confirmPassword !== password){
            setPassword('')
            setConfirmPassword('')
            return setErrors(['Confirm Password field must be the same as the Password field'])
        }
        const form = {
            username,
            email,
            password
        }
        try {
            let user = await dispatch(signup(form));
            if (user) {
                return <Redirect to="/" />
            }
            reset();
        } catch (err) {
            let data = await err.json()
            setErrors(data.errors)
        }
    }

    const reset = () => {
        setUsername('')
        setEmail('')
        setPassword('')
    }
    return (
        <>
           <div className='login-form__container'>
            <h1 className='header'>Signup for Yummylep</h1>
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
                    <label htmlFor='email'>
                        <p>Email: </p>
                        <input type='text'
                            className="text-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                <div className='input__container'>
                    <label htmlFor='password'>
                        <p>Confirm Password:</p>
                        <input type='password'
                            className="text-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></input>
                    </label>
                </div>
                <div className='submit-button__container'>
                <button type='submit'
                    className='submit-button'
                    // disabled={errors.length ? true : false}
                >Sign Up
                </button>

            </div>
            </form>
            <small>Already have an account?<Link to='/login'>Log in</Link></small>


            <div className='login-form__img'>
                <img src='https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png' alt=''></img>
            </div>

        </div>
        </>
    )
}

export default Signup;
