import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getBusiness } from '../../store/business';
import { getAllReviews } from '../../store/review';

import './homepage.css'

const Homepage = () => {

    const allBusiness = useSelector(state => state.business)
    // // console.log(Object.values(allBusiness).map(business=> business.Reviews))
    // const reviewOfBusiness = Object.values(allBusiness).map(business=> business.Reviews)
    // console.log(Object.values(reviewOfBusiness).map(review => Object.values(review)))
    const reviews = useSelector(state => state.reviews)

    const reviewArr = Object.values(reviews)
    // console.log(reviewArr.filter(review => review.businessId === 2).reduce((acc,el) => null))


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusiness());
        dispatch(getAllReviews())
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
                            <div id='home-title'>
                                <h2>{business.title}</h2>
                                <p>All Reviews: ({reviewArr.filter(review => review.businessId === business.id) ?
                                    reviewArr.filter(review => review.businessId === business.id).length  : 0}
                                )</p>
                                <p className='dollar-sign'><i className="fas fa-dollar-sign"></i><i className="fas fa-dollar-sign"></i></p>
                                <p><i className="fas fa-check"></i>Indoor dining<i className="fas fa-check"></i>Delivery<i className="fas fa-check"></i>Takeout</p>
                            </div>

                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage;
