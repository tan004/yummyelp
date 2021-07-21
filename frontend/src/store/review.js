import { csrfFetch } from "./csrf"

const GET = 'reviews/GET'
const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'
const ADD_REVIEW = 'reviews/ADD_REVIEW'

const load = (reviews, businessId) => ({
    type: LOAD_REVIEWS,
    reviews,
    businessId
})
const get = (reviews) => ({
    type: GET,
    reviews
})

const add = (review) => ({
    type: ADD_REVIEW,
    review
})

export const getAllReviews = () => async dispatch => {
    const req = await fetch(`/api/reviews`);

    if(req.ok){
        const reviews = await req.json()
        dispatch(get(reviews))
    }
}

export const getReviews = (id) => async dispatch => {
    const req = await fetch(`/api/business/${id}/reviews`);

    if(req.ok) {
        const reviews = await req.json()
        // console.log(reviews)
        dispatch(load(reviews, +id))
    }
}

export const addReview = (form , businessId) => async dispatch => {

    const req = await csrfFetch(`/api/business/${businessId}/reviews`,{
        method: 'post',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    })

    const newReview = await req.json();
    if(req.ok){
        dispatch(add(newReview))
    }
    return newReview
}

const initialState = {};

const reviewsReducer = (state= initialState, action) => {
    switch (action.type) {
        case LOAD_REVIEWS: {
            const allReviews = {};

            const selected = action.reviews.filter(review => review.businessId === action.businessId);

            selected.forEach(review => {
                allReviews[review.id] = review
            })
            return allReviews
        }

        case GET : {
            const all = {};

            action.reviews.forEach(review => {
                all[review.id] = review
            })

            return all;
        }

        case ADD_REVIEW: {
            const newState = {...state, [action.review.id]: action.review}

            return newState
        }

        default:
            return state;
    }
}

export default reviewsReducer;
