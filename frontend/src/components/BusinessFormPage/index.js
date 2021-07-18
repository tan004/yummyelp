import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const BusinessFormPage = () => {
    const user = useSelector(state => state.session.user)
    console.log(user)
    const history = useHistory();
    const [title,setTitle] = useState('');
    const [imgUrl,setImgUrl] =useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [zipCode,setZipCode] = useState('');
    const [lat, setLat] = useState(0);
    const [lng,setLng] = useState(0);

    // useEffect(() => {

    // },[])

    if(user === null){
      history.push('/login')
    }

    const handleFrom = (e) => {
        e.preventDefault();

        const business = {
            id: user.id,
            title,
            imgUrl,
            description,
            address,
            city,
            state,
            zipCode
        }

        console.log(business)

        history.push('/')
    }

    return (
        <>
            <form onSubmit={handleFrom}>
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
