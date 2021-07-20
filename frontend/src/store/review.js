
const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'

const load = (reviews, businessId) => ({
    type: LOAD_REVIEWS,
    reviews,
    businessId
})


export const getReviews = (id) => async dispatch => {
    const req = await fetch(`/api/business/${id}/reviews`);

    if(req.ok) {
        const reviews = await req.json()
        dispatch(load(reviews, +id))
    }
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

        default:
            return state;
    }
}

export default reviewsReducer;
