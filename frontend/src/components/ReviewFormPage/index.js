import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {addReview} from '../../store/review'

const ReviewFormPage = ({ hideForm }) => {
    const {id } = useParams()
    const [answer, setAnswer] = useState('');
    const [liked, setLiked] = useState(false);
    const [rating, setRating] = useState(0)

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

        let review = await dispatch(addReview(form, business.id))
        if(review){
            hideForm()
        }
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
      };


    return (
        <div>

            <h1>Review page</h1>
            <form onSubmit={handleForm}>
                <label htmlFor='rating'>
                    <p>Rate: </p>
                    <input
                    type='number'
                    // placeholder='1-5, ex: 3.5'
                    value= {rating}
                    onChange={e => setRating(e.target.value)}
                    />
                </label>
                <label htmlFor='liked'>like:</label>
                    <input
                    type='checkbox'
                    checked={liked}
                    onChange={e => setLiked(e.target.checked) }
                    />

                <label htmlFor='answer'>
                    <textarea
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                </label>

                <button type='submit'>Post</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </form>

        </div>
    )
}

export default ReviewFormPage;
