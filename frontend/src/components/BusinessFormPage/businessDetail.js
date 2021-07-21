import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getOneBusiness, removeBusiness } from "../../store/business";
import { getReviews } from "../../store/review";
import ReviewFormPage from "../ReviewFormPage";
import './businessDetail.css';

const BusinessDetailPage = () =>{
    const user = useSelector(state => state.session.user)
    const { id } = useParams();

    const business = useSelector(state => state.business[id])
    const reviews = useSelector(state => state.reviews)
    const [showReviewForm,setShowReviewForm] = useState(false)
    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        dispatch(getOneBusiness(id))
        dispatch(getReviews(id))
        setShowReviewForm(false)
    },[dispatch,id])

    const remove = () =>{
        dispatch(removeBusiness(business.id))
        history.push('/');
    }

    let content = null;
    if(showReviewForm && user && user.id !== business.ownerId ){
        content = (
            <ReviewFormPage hideForm={()=> setShowReviewForm(false)} />
        )
    }

    return (
    <div className='detailPage'>
        <div className='detail-title'>
            <img src={business?.imgUrl} alt={`img-${business?.id}`} />
            <h1 className='detail-h1'>{business?.title}</h1>
        </div>
        <p>{business?.description}</p>
        <p>Address: {business?.address} {business?.city},{business?.state} {business?.zipCode}</p>
        {business?.ownerId === user?.id ? (
            <div>
                <Link to={`/business/${business?.id}/edit`}>edit</Link>
                <button onClick={remove}>Delete</button>
            </div>
        )
        : <button disabled={!user ? true: false} onClick={() => setShowReviewForm(true) }>Write a Review</button>}
            <div>
                {content}
            </div>
        <h2>Reviews</h2>
        {Object.values(reviews).map(review => <p key={review?.id}>{review?.answer}</p>)}
    </div>
    )
}

export default BusinessDetailPage;
