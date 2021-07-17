import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getBusiness } from '../../store/business';
import './homepage.css'
const Homepage = () => {

    const allBusiness = useSelector(state => state.business)
    // console.log(allBusiness.business)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusiness());
    }, [dispatch])

    return (
        <div  >
            <div className='allbusiness'>
                {allBusiness.business.map(business =>
                (
                    <div className='business-list'>
                        <NavLink key={business.title} to={`/business/${business.id}`}>

                            <img src={business.imgUrl} alt={business.id} />
                            <h2 key={business.id}>{business.title}</h2>

                        </NavLink>
                        <p key={business.id}>{business.description}</p>
                        <li key={business.id}>{business.address}</li>
                        <li key={business.id}>{business.city}</li>
                        <li key={business.id}>{business.state}</li>
                        <li key={business.id}>{business.zipCode}</li>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage;
