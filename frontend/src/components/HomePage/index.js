import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBusiness } from '../../store/business';
const Homepage = () => {

    const allBusiness = useSelector(state => state.business)
    console.log(allBusiness.business)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusiness());
    }, [dispatch])

    return (
        <div>
            {allBusiness.business.map(business =>
                (
                    <div>
                        <img style={{width:300}} src={business.imgUrl} alt={business.id}/>
                        <li key={business.id}>{business.title}</li>
                        <li key={business.id}>{business.description}</li>
                        <li key={business.id}>{business.address}</li>
                        <li key={business.id}>{business.city}</li>
                        <li key={business.id}>{business.state}</li>
                        <li key={business.id}>{business.zipCode}</li>
                    </div>
                )
            )}
        </div>
    )
}

export default Homepage;
