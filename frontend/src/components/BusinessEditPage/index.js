import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory,useParams } from "react-router-dom";
import { stateArr, cityArr  } from "../BusinessFormPage/addressArr";
import { updateBusiness } from "../../store/business";

const BusinessEditPage = () => {
    const { id } = useParams();
    const user = useSelector(state => state.session.user)
    const business = useSelector(state => state.business[id])

    const history = useHistory();
    const dispacth = useDispatch();

    const [title, setTitle] = useState(business.title);
    const [imgUrl, setImgUrl] = useState(business.imgUrl);
    const [description, setDescription] = useState(business.description);
    const [address, setAddress] = useState(business.address);
    const [city, setCity] = useState(business.city);
    const [state, setState] = useState(business.state);
    const [zipCode, setZipCode] = useState(business.zipCode);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const validator = []
        if (!title) {
            validator.push('Please provide a name for your business.')
        }
        if (title.length < 3 || title.lenght > 100) {
            validator.push('Please provide your business name with length between 3 to 100 characters.')
        }
        if (!address) {
            validator.push('Please provide your address.')
        }
        if (!city) {
            validator.push('Please provide a value the city.')
        }
        if (!state) {
            validator.push('Please provide a value for the state')
        }
        if (!imgUrl) {
            validator.push('Please provide a image Url for your business cover picture!')
        }
        setErrors(validator)
        return () => setErrors('')
    }, [title, address, city, state, imgUrl])



    if (user === null) {
        history.push('/login')
    }
    if(user.id !== business.ownerId){
        history.push(`/business/${business.id}`)
    }

    const handleFrom = async (e) => {
        e.preventDefault();

        const form = {
            id: business.id,
            ownerId: user.id,
            title,
            imgUrl,
            description,
            address,
            city,
            state,
            zipCode
        }

        try {
            let newBusiness = await dispacth(updateBusiness(form));
            if (newBusiness) {
                history.push('/')
            }
        } catch (err) {
            let data = await err.json();
            setErrors(data.errors)
        }
    }

    return (
        <>
        <form onSubmit={handleFrom}>
                <div className='errors__container'>
                    <ul>
                        {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                </div>
                <label htmlFor='title'>
                    <p>Title: </p>
                    <input type='text'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </label>
                <label htmlFor='imgUrl'>
                    <p>Image Url: </p>
                    <input type='text'
                        value={imgUrl}
                        onChange={e => setImgUrl(e.target.value)}
                    />
                </label>
                <label htmlFor='description'>
                    <p>Description: </p>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>
                <label htmlFor='address'>
                    <p>Address: </p>
                    <input type='text'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </label>
                <label htmlFor='city'>
                    <p>City: </p>
                    <select
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    >
                        {cityArr.map(city => <option key={city}>{city}</option>) }
                    </select>
                </label>
                <label htmlFor='state'>
                    <p>State: </p>
                    <select
                        value={state}
                        onChange={e => setState(e.target.value)}
                    >
                        {stateArr.map(state => <option key={state}>{state}</option>) }
                    </select>
                </label>
                <label htmlFor='zipCode'>
                    <p>Zip Code: </p>
                    <input type='text'
                        value={zipCode}
                        onChange={e => setZipCode(e.target.value)}
                    />
                </label>
                <div>
                    <button type='submit'>Update</button>
                    <button type='submit'><Link to={`/business/${business.id}`}>Cancel</Link></button>
                </div>
            </form>
        </>
    )
}
export default BusinessEditPage;
