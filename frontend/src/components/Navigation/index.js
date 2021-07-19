import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import ProfileButton from "./ProfileButton";
import './navigation.css';


const Navigation = ({ isLoaded }) => {
    const user = useSelector(state => state.session.user)

    let sessionLinks;
    if (user) {
        sessionLinks = (
        <ProfileButton user={user} />
        )
    } else {
        sessionLinks = (<>
            <NavLink className='login' to="/login">Log In</NavLink>
            <NavLink className='signup' to="/signup">Sign Up</NavLink>
        </>)
    }

    return (
        <>
        <div className="navbar__container">
            <div className="about-me">
                <a href='https://github.com/tan004'>About me</a>
            </div>
            <div className='navbar-left__container'>
            <NavLink exact to="/">Yummyelp</NavLink>
            </div>

            <div className='navbar-right__container'>
            <NavLink to='/business'>Create business</NavLink>
            {isLoaded && sessionLinks}
            </div>
        </div>
        </>
    )
}

export default Navigation;
