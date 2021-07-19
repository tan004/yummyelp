import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBusiness } from '../../store/business'

const BusinessFormPage = () => {
    const user = useSelector(state => state.session.user)
    const history = useHistory();
    const dispacth = useDispatch();

    const [title,setTitle] = useState('');
    const [imgUrl,setImgUrl] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [zipCode,setZipCode] = useState('');
    const [errors, setErrors] = useState([]);

    // const [lat, setLat] = useState(0);
    // const [lng,setLng] = useState(0);

    useEffect(() => {
        const validator = []
        if(!title) {
            validator.push('Please your business name with length between 3 to 100 characters.')
        }
        setErrors(validator)
        return () => setErrors('')
    },[title])



    if(user === null){
      history.push('/login')
    }

    const handleFrom = async(e) => {
        e.preventDefault();

        const business = {
            ownerId: user.id,
            title,
            imgUrl,
            description,
            address,
            city,
            state,
            zipCode
        }

        try{
            let newBusiness = await dispacth(createBusiness(business));
            if(newBusiness){
                history.push('/')
            }
        }catch(err){
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
                        onChange={e => setImgUrl( e.target.value)}
                    />
                </label>
                <label htmlFor='description'>
                <p>Description: </p>
                    <textarea
                        value={description}
                        onChange={e => setDescription( e.target.value)}
                    />
                </label>
                <label htmlFor='address'>
                <p>Address: </p>
                    <input type='text'
                        value={address}
                        onChange={e => setAddress( e.target.value)}
                    />
                </label>
                <label htmlFor='city'>
                <p>City: </p>
                    <input type='text'
                        value={city}
                        onChange={e => setCity( e.target.value)}
                    />
                </label>
                <label htmlFor='state'>
                <p>State: </p>
                    <input type='text'
                        value={state}
                        onChange={e => setState( e.target.value)}
                    />
                </label>
                <label htmlFor='zipCode'>
                <p>Zip Code: </p>
                    <input type='text'
                        value={zipCode}
                        onChange={e => setZipCode( e.target.value)}
                    />
                </label>
                <div>
                <button tyep='submit'>Create</button>
                </div>
            </form>
        </>
    )
}
export default BusinessFormPage;
