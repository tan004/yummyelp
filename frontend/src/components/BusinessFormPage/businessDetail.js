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

    const ShowReview = ({ review }) => {
        const [EditReviewId, setEditReviewId] = useState(null)

        useEffect(() => {
            setEditReviewId(null)
        }, [])

        let editpage=null;

        if (EditReviewId) {
            editpage = (
                <ReviewEditPage reviewId={EditReviewId} hideForm={() => setEditReviewId(null)} />
            )
        }

        const removeReview = () => {
            dispatch(deleteReview(review.id))
        }
        return (
            <>
                <div className='review-detail'>
                    <span>Anonymous</span>
                    {review.liked ? <i id={`${review.liked}`} className="fas fa-thumbs-up"></i> : <i className="far fa-thumbs-up"></i>}
                    <p>rating: {review.rating}</p>
                    <p key={review?.id}>{review?.answer}</p>

                    {review.userId === user?.id ?
                        (
                            <div>
                                <button className='edit-button' onClick={() => setEditReviewId(review.id)}>Edit</button>
                                <button className='delete-button' onClick={removeReview}>Delete</button>
                            </div>
                        ) : ''}

                    {EditReviewId ?
                        <div className='show-edit-form'>
                            {editpage}
                        </div> : ''}
                </div>
            </>
        )
    }

    return (
        <div className='detailPage'>
            <div className='detail-title'>
                <img src={business?.imgUrl} alt={`img-${business?.id}`} />
                <h1 className='detail-h1'>{business?.title}</h1>
            </div>

            <div>
                <p>{business?.description}</p>
                <p>Address: {business?.address} {business?.city},{business?.state} {business?.zipCode}</p>
            </div>

            <div className='detail-owner-div'>
            {business?.ownerId === user?.id ? (
                <div className='edit-link__container'>
                    <Link className='edit-link' to={`/business/${business?.id}/edit`}>Edit Business</Link>
                    <button className='add-photo' onClick={remove}>Delete</button>
                </div>
            )
                : <button className='add-review' onClick={() => !user ? history.push('/login') : setShowReviewForm(true)}><i className="far fa-star"></i> Write a Review</button>}

            <button className='add-photo' onClick={() => !user ? history.push('/login') : ''}><i className="fas fa-camera"></i> add Photo</button>
                </div>
            <div className='add-review__container'>
                {content}
            </div>

            <h2>Reviews</h2>
            <div className='review__outer-div'>
                {!reviewArr.length ?  (<h3>
                    Put the 1ST review here!
                </h3>) :

                reviewArr.map(review => (
                    <div key={review.id} className='review__container'>
                        <ShowReview review={review} hideForm={() => setShowReviewForm(false)}/>
                    </div>
                ))

                }
            </div>
        </div >
    )
}

export default BusinessDetailPage;
