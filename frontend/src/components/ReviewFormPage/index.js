import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {addReview} from '../../store/review'

const ReviewFormPage = ({ hideForm }) => {
    const {id } = useParams()
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

        try{

            let review = await dispatch(addReview(form, business.id))
            if(review){
                hideForm()
            }
        }catch(err){
            const data = await err.json()
            setErrors(data.errors)
        }
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
      };


    return (
        <div>
            <div className='errors__container'>
                <ul>
                    {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            </div>
            <form onSubmit={handleForm}>
                <label htmlFor='rating'>
                    <p>Overall Rating: </p>
                    <input
                    type='number'
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
