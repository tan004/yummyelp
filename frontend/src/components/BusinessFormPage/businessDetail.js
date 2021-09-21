import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getOneBusiness, removeBusiness } from "../../store/business";
import { deleteReview, getReviews } from "../../store/review";
import ReviewFormPage from "../ReviewFormPage";
import ReviewEditPage from "../ReviewEditPage";
import FooterPage from "../FooterPage";
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
            return () => null;
        }, [])

        let editpage = null;

        if (EditReviewId) {
            editpage = (
                <ReviewEditPage reviewId={EditReviewId} hideForm={() => setEditReviewId(null)} />
            )
        }

        let starNum = parseFloat(review.rating);

        let stars = null;

        if(starNum === 1){
            stars = (
                <span className='stars'><i className="fas fa-star"></i></span>
            )
        }else if(starNum > 1 && starNum <= 2){
            stars = (
                <span className='stars'><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
            )
            }else if(starNum > 2 && starNum <= 3){
                stars = (
                    <span className='stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                )
            }else if(starNum > 3 && starNum <= 4){
                stars = (
                    <span className='stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                )
            }else if(starNum > 4 && starNum <= 5){
                stars = (
                    <span className='stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                )
            }else{
                stars = (
                    <span>0</span>
                )
            }

        const removeReview = () => {
            dispatch(deleteReview(review.id))
        }

        return (
            <>
                <div className='review-detail'>
                    <div className='review-name__container'>
                        <p className='review-name'>Anonymous User:</p>
                    <span>
                        {review.liked ? <i id={`${review.liked}`} className="fas fa-thumbs-up"></i> : <i className="far no-liked fa-thumbs-up"></i>}
                    </span>
                    </div>


                    <div className='review-name__container'>
                        <p className='review-rating'>Overall Rating: {stars}</p>
                    </div>

                    <div className='review-name__container'>
                        <p className='review-answer' key={review?.id}>{review?.answer}</p>
                    </div>

                    {review.userId === user?.id ?
                        (
                            <div className='review-buttons'>
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
        <>
        <div className='detailPage'>
            <div className='detail-title'>
                <img className='huge-img' src={business?.imgUrl} alt={`img-${business?.id}`} />
                <h1 className='detail-h1'>{business?.title}</h1>
            </div>

            <div className='business-info'>
                <h3 className='about-us'>About Us</h3>
                <p className='description'>{business?.description}</p>
            </div>

            <div className='business-info'>
                <h3 className='about-us'>Location</h3>
                <p className='address'>{business?.address}</p>
                <p className='city-state'> {business?.city}, {business?.state} {business?.zipCode}</p>
            </div>

            <div className='detail-owner-div'>
                {business?.ownerId === user?.id ? (
                    <div className='edit-link__container'>
                        <Link className='edit-link' to={`/business/${business?.id}/edit`}>Edit Business</Link>
                        <button className='add-photo' onClick={remove}>Delete</button>
                    </div>
                )
                    : <button className='add-review' onClick={() => !user ? history.push('/login') : setShowReviewForm(true)}><i id='white-star' className="far fa-star"></i> Write a Review</button>}

                {/* <button className='add-photo' onClick={() => alert('Sorry, Add Photo function is still under-contruction. Please check it out later!')}><i className="fas fa-camera"></i> Add Photo</button> */}
            </div>
            <div className='add-review__container'>
                {content}
            </div>
            <div className='review-h2'>
                <h2 className='about-us'>Reviews</h2>
            </div>
            <div className='review__outer-div'>
                {!reviewArr.length ? (
                    <p className='no-review'>
                        Put the 1ST review here!
                    </p>) :

                    reviewArr.map(review => (
                        <div key={review.id} className='review__container'>
                            <ShowReview review={review} hideForm={() => setShowReviewForm(false)} />
                        </div>
                    ))

                }
            </div>
        </div >
        <FooterPage />
        </>
    )
}

export default BusinessDetailPage;
