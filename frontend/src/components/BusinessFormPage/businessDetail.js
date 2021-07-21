import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getOneBusiness, removeBusiness } from "../../store/business";
import { deleteReview, getReviews } from "../../store/review";
import ReviewFormPage from "../ReviewFormPage";
import ReviewEditPage from "../ReviewEditPage";
import './businessDetail.css';

const BusinessDetailPage = () => {
    const user = useSelector(state => state.session.user)
    const { id } = useParams();

    const business = useSelector(state => state.business[id])
    const reviews = useSelector(state => state.reviews)
    const reviewArr = Object.values(reviews)

    const [showReviewForm, setShowReviewForm] = useState(false)

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        dispatch(getOneBusiness(id))
        dispatch(getReviews(id))
        setShowReviewForm(false)

    }, [dispatch, id])

    const remove = () => {
        dispatch(removeBusiness(business.id))
        history.push('/');
    }



    let content = null;
    if (showReviewForm && user && user.id !== business.ownerId) {
        content = (
            <ReviewFormPage hideForm={() => setShowReviewForm(false)} />
        )
    }

    const ShowReview = ({review}) => {
        const [EditReviewId, setEditReviewId] = useState(null)

        useEffect(() => {
            setEditReviewId(null)
        },[])


        let editpage = null;
        if (EditReviewId) {
        editpage = (
            <ReviewEditPage reviewId={EditReviewId} hideForm={() => setEditReviewId(null)} />
        )
    }

        const removeReview = () => {
            dispatch(deleteReview(review.id))
        }
        return (
            <div >
                    <div className='review-detail'>
                        <span>Anonymous</span>
                        {review.liked ? <i id={`${review.liked}`} className="fas fa-thumbs-up"></i> : <i className="far fa-thumbs-up"></i>}
                        <p>rating: {review.rating}</p>
                        <p key={review?.id}>{review?.answer}</p>

                        {review.userId === user?.id ?
                            (
                                <div>
                                    <button onClick={() => setEditReviewId(review.id)}>edit</button>
                                    <button onClick={removeReview}>delete</button>
                                </div>
                            ) : ''}
                    </div>
            <div>
                {editpage}
            </div>
        </div>
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
                : <button onClick={() => !user ? history.push('/login') : setShowReviewForm(true)}>Write a Review</button>}

                <button onClick={() => !user ? history.push('/login') : ''}>add Photo</button>

            <div>
                {content}
            </div>

            <h2>Reviews</h2>
            <div>
            {reviewArr.map(review => (
                <div key={review.id}>
                <ShowReview  review={review} />
                </div>
            ))}
           </div>
        </div >
    )
}

export default BusinessDetailPage;
