import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getBusiness } from '../../store/business';
import './homepage.css'

const Homepage = () => {

    const allBusiness = useSelector(state => state.business)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusiness());
    }, [dispatch])


    return (
        <div >
            <div className='allbusiness'>
                {Object.values(allBusiness).map((business) =>
                (
                    <div key={business.id} className='business-list'>
                        <NavLink to={`/business/${business.id}`}>
                            <div className='cover-img'>
                                <img src={business.imgUrl} alt={`img-${business.id}`} />
                            </div>
                            <div className='home-title'>
                                <h2>{business.title}</h2>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage;
