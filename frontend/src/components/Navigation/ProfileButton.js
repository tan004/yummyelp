import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';


const ProfileButton = ({ user }) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
        if (showMenu === true) {
            return;
        } else {
            setShowMenu(true)
        }
    }
    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };


    return (
        <>
            <button className='profile-button' onClick={toggleMenu}>
                <i className="far fa-address-card"></i>
            </button>
            {showMenu && (
                <div className="profile-dropdown">
                    <div className='triangle'>
                        <i className="fas fa-caret-up"></i>
                    </div>
                    <div className="dropdown-list">{user.username}</div>
                    <div className="dropdown-list">{user.email}</div>
                    <div>
                        <button className='logout-button'onClick={logout}>Log Out</button>
                    </div>
                </div>
            )}
        </>
    )
}


export default ProfileButton;
