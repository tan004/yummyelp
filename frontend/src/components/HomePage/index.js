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
                {allBusiness.business.map((business) =>
                (
                    <div key={business.id} className='business-list'>
                        <NavLink to={`/business/${business.id}`}>
                            <div>
                                <img src={business.imgUrl} alt={`img-${business.id}`} />
                            </div>
                            <div>
                                <h2>{business.title}</h2>
                            </div>
                        </NavLink>
                        <p >{business.description}</p>
                        <p >Address: {business.address} {business.city},{business.state} {business.zipCode}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage;
