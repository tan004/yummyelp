import { csrfFetch } from "./csrf"
const LOAD = 'business/LOAD'
const ADD = 'business/ADD'

const load = list => ({
    type: LOAD,
    list,
})

const add = (business) => ({
    type: ADD,
    business
})


export const getBusiness = () => async dispatch => {
    const req = await csrfFetch(`/api/business`);
    if(req.ok){
        const list = await req.json();

        dispatch(load(list));
    }
}

export const createBusiness = (form) => async dispatch =>{
    const {  ownerId,
        title,
        imgUrl,
        description,
        address,
        city,
        state,
        zipCode } = form;

    const req = await csrfFetch(`/api/business`, {
        method: 'post',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify({ownerId,
            title,
            imgUrl,
            description,
            address,
            city,
            state,
            zipCode})

    });
    const newBusiness = await req.json();
    if(req.ok){
        dispatch(add(newBusiness))
    }
    return req;
}


const initialState = { business: []}

const businessReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD: {
            const allBusiness = {};
            action.list.forEach(business => {
                allBusiness[business.id] = business;
            });
            return {
                ...allBusiness,
                ...state,
                business: action.list
            }
        }
        case ADD: {
            const newState = {...state}
            newState.business.push(action.business)
            return newState;
        }
        default:
            return state;
    }
}

export default businessReducer;
