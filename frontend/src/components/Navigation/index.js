import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import ProfileButton from "./ProfileButton";
import './navigation.css';
import { useEffect } from "react";

const Navigation = ({ isLoaded }) => {
    const user = useSelector(state => state.session.user)

    let sessionLinks;
    if (user) {
        sessionLinks = (<ProfileButton user={user} />)
    } else {
        sessionLinks = (<>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </>)
    }

    return (
        <>
        <div className="navbar__container">
            <div className='navbar-left__container'>
            <NavLink exact to="/">Yummyelp</NavLink>
            </div>
            <div className='navbar-right__container'>
            {isLoaded && sessionLinks}
            </div>
        </div>
        </>
    )
}

export default Navigation;
