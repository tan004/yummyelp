import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getOneBusiness, removeBusiness } from "../../store/business";


const BusinessDetailPage = () =>{
    const user = useSelector(state => state.session.user)
    const { id } = useParams();
    const business = useSelector(state => state.business[id])
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getOneBusiness(id))
    })

    const remove = () =>{
        dispatch(removeBusiness(business.id))
        history.push('/');
    }

    return (<>
        <h1>{business.title}</h1>

        <div>
            <img src={business.imgUrl} alt={`img-${business.id}`} />
        </div>
        <p >{business.description}</p>
        <p >Address: {business.address} {business.city},{business.state} {business.zipCode}</p>
        {business.ownerId === user?.id ? (
            <div>
                <Link to={`/business/${business.id}/edit`}>edit</Link>
                <button onClick={remove}>Delete</button>
            </div>
        )
        : ''}
    </>
    )
}

export default BusinessDetailPage;
