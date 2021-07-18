import { csrfFetch } from "./csrf"
const LOAD = 'business/LOAD'

const load = list => ({
    type: LOAD,
    list,
})

export const getBusiness = () => async dispatch => {
    const req = await csrfFetch(`/api/business`);
    if(req.ok){
        const list = await req.json();

        dispatch(load(list));
    }
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
        default:
            return state;
    }
}

export default businessReducer;
