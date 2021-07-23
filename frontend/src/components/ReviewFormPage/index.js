import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addReview } from '../../store/review'
import './reviewForm.css'

const ReviewFormPage = ({ hideForm }) => {
    const { id } = useParams()
    const [answer, setAnswer] = useState('');
    const [liked, setLiked] = useState(false);
    const [rating, setRating] = useState(0)
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const business = useSelector(state => state.business[id])
    const user = useSelector(state => state.session.user)

    const handleForm = async (e) => {
        e.preventDefault()

        const form = {
            userId: user.id,
            businessId: business.id,
            answer,
            rating,
            liked,
        }

        try {

            let review = await dispatch(addReview(form, business.id))
            if (review) {
                hideForm()
            }
        } catch (err) {
            const data = await err.json()
            setErrors(data.errors)
        }
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    };


    return (
        <div className='edit-review__container'>
            <div className='errors__container'>
                <div className='all-errors'>
                    {errors && errors.map((error, idx) => <p className='error-text' key={idx}><i className="fas fa-exclamation-circle"></i>{error}</p>)}
                </div>
            </div>
            <div className='form_div' >
                <form className='review-form' onSubmit={handleForm}>
                    <div className='rating-div'>
                        <label htmlFor='rating'>
                            <span className='rating-span'>Overall Rating: </span>
                            <input
                                className='rating-input'
                                type='number'
                                value={rating}
                                onChange={e => setRating(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className='liked-div'>
                        <label htmlFor='liked'><i id='true' className="fas fa-thumbs-up"></i></label>
                        <input
                            className='liked-input'
                            type='checkbox'
                            checked={liked}
                            onChange={e => setLiked(e.target.checked)}
                        />
                    </div>

                    <div className='answer-div'>
                        <label htmlFor='answer'>
                            <textarea
                                className='answer-textarea'
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            ></textarea>
                        </label>
                    </div>

                    <div className='review-button-div'>
                        <button className='review-post' type='submit'>Post</button>
                        <button className='review-cancel' onClick={handleCancelClick}>Cancel</button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default ReviewFormPage;
