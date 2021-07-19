import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getBusiness } from '../../store/business';
import './homepage.css'

const Homepage = () => {

    const allBusiness = useSelector(state => state.business)
    // console.log(allBusiness.business)
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusiness());
    }, [dispatch])


    return (
        <div  >
            <div className='allbusiness'>
                {allBusiness.business.map((business, idx) =>
                (
                    <div className='business-list'>
                        <NavLink key={idx} to={`/business/${business.id}`}>
                            <div>
                            <img  key={`img-${business.id}`} src={business.imgUrl} alt={`img-${idx}`} />
                            </div>
                            <div>
                            <h2 key={`title-${idx}`}>{business.title}</h2>
                            </div>
                        </NavLink>
                        {currentUser?.id === business.ownerId ? <button>edit</button>:''}
                        <p key={`description-${idx}`}>{business.description}</p>
                        <p key={`address-${idx}`}>Address: {business.address} {business.city},{business.state} {business.zipCode}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage;
