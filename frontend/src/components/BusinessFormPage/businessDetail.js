import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOneBusiness } from "../../store/business";


const BusinessDetailPage = () =>{
    const user = useSelector(state => state.session.user)
    const { id } = useParams();
    const business = useSelector(state => state.business[id])
    console.log(business)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneBusiness(id))
    })



    return (<>
        <h1>{business.title}</h1>

        <div>
            <img src={business.imgUrl} alt={`img-${business.id}`} />
        </div>
        <p >{business.description}</p>
        <p >Address: {business.address} {business.city},{business.state} {business.zipCode}</p>
        {business.ownerId === user?.id ? <Link to={`/business/${business.id}/edit`}>edit</Link>: ''}
    </>
    )
}

export default BusinessDetailPage;
