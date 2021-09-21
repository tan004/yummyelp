import { csrfFetch } from "./csrf"

const LOAD = 'business/LOAD'
const ADD = 'business/ADD'
const EDIT = 'business/EDIT';
const REMOVE = 'business/REMOVE'

const load = list => ({
    type: LOAD,
    list,
})

const add = (business) => ({
    type: ADD,
    business
})

const edit = (business) => ({
    type: EDIT,
    business
})

const remove = (id) => ({
    type: REMOVE,
    id
})



export const getBusiness = () => async dispatch => {
    const req = await csrfFetch(`/api/business`);
    if (req.ok) {
        const list = await req.json();
        dispatch(load(list));
    }
}

export const getOneBusiness = (id) => async dispatch => {

    const req = await csrfFetch(`/api/business/${id}`);

    if (req.ok) {
        const business = await req.json();
        dispatch(add(business))
    }
}


export const createBusiness = (form) => async dispatch => {
    const { ownerId,
        title,
        imgUrl,
        description,
        address,
        city,
        state,
        zipCode } = form;

    const req = await csrfFetch(`/api/business`, {
        method: 'post',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ownerId,
            title,
            imgUrl,
            description,
            address,
            city,
            state,
            zipCode
        })

    });
    const newBusiness = await req.json();
    if (req.ok) {
        dispatch(add(newBusiness))
    }
    return newBusiness;
}


export const updateBusiness = (form) => async dispatch => {
    const id = form.id

    const req = await csrfFetch(`/api/business/${id}/edit`, {
        method: 'PUT',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
    });
    const editBusiness = await req.json();
    if (req.ok) {
        dispatch(edit(editBusiness));
    }
    return req
}

export const removeBusiness = (id) => async dispatch => {
    const req = await csrfFetch(`/api/business/${id}`, {
        method: 'DELETE',
    })

    if(req.ok){
        dispatch(remove(id));
    }
    return req;
}


const initialState = {}

const businessReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allBusiness = {};
            action.list.rows.forEach(business => {
                allBusiness[business.id] = business;
            });
            return {
                ...allBusiness,
                ...state,
            }
        }
        case ADD: {

            const newState = {...state, [action.business.id]:action.business}
            return newState;
        }

        case EDIT: {
            return {
                ...state,
                [action.business.id]: {
                    ...state[action.business.id],
                    ...action.business
                }
            }
        }

        case REMOVE: {
            const newState = {...state}
            delete newState[action.id]
            return newState;
        }
        default:
            return state;
    }
}

export default businessReducer;
