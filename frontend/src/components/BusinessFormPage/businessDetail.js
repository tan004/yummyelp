import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getOneBusiness, removeBusiness } from "../../store/business";
import './businessDetail.css';

const BusinessDetailPage = () =>{
    const user = useSelector(state => state.session.user)
    const { id } = useParams();
    const business = useSelector(state => state.business[id])
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getOneBusiness(id))
    })

    const remove = () =>{
        dispatch(removeBusiness(business.id))
        history.push('/');
    }

    return (
    <div className='detailPage'>
        <div className='detail-title'>
            <img src={business.imgUrl} alt={`img-${business.id}`} />
            <h1 className='detail-h1'>{business.title}</h1>
        </div>
        <p>{business.description}</p>
        <p>Address: {business.address} {business.city},{business.state} {business.zipCode}</p>
        {business.ownerId === user?.id ? (
            <div>
                <Link to={`/business/${business.id}/edit`}>edit</Link>
                <button onClick={remove}>Delete</button>
            </div>
        )
        : <button>Write a Review</button>}

        <h2>Reviews</h2>
        <div></div>
    </div>
    )
}

export default BusinessDetailPage;
