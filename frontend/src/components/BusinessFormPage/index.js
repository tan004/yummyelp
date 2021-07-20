import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBusiness } from '../../store/business'
import { stateArr, cityArr } from "./addressArr";
import './businessForm.css'

const BusinessFormPage = () => {
    const user = useSelector(state => state.session.user)
    const history = useHistory();
    const dispacth = useDispatch();

    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState(cityArr[0]);
    const [state, setState] = useState(stateArr[0]);
    const [zipCode, setZipCode] = useState('');
    const [errors, setErrors] = useState([]);

    // const [lat, setLat] = useState(0);
    // const [lng,setLng] = useState(0);

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

    const handleFrom = async (e) => {
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

        try {
            let newBusiness = await dispacth(createBusiness(business));
            if (newBusiness) {
                history.push('/')
            }
        } catch (err) {
            let data = await err.json();
            setErrors(data.errors)
        }
    }

    return (
        <div className='business-form__container'>
            <h1 className='header'>Ready to show your business on Yummyelp?</h1>
            <div className='errors__container'>
                <ul>
                    {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
            </div>
            <div className='form-container'>
                <form onSubmit={handleFrom}>
                    <div className='business-input__container'>
                        <label htmlFor='title'>
                            <p>Business Name: </p>
                            <input type='text'
                                className="business-text-input"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='business-input__container'>
                        <label htmlFor='imgUrl'>
                            <p>Cover Image Url: </p>
                            <input type='text'
                                className="business-text-input"
                                value={imgUrl}
                                placeholder='ex: https://url.com/asdas/xxx.jpg'
                                onChange={e => setImgUrl(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className='business-input__container'>
                        <label htmlFor='address'>
                            <p>Address: </p>
                            <input type='text'
                                className="business-text-input"
                                value={address}
                                placeholder='122 market street'
                                onChange={e => setAddress(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='business-input__container'>
                        <label htmlFor='city'>
                            <p>City: </p>
                            <select
                                value={city}
                                className='address-dropdown'
                                onChange={e => setCity(e.target.value)}
                            >
                                {cityArr.map(city => <option key={city}>{city}</option>)}
                            </select>
                        </label>
                    </div>

                    <div className='business-input__container'>
                        <label htmlFor='state'>
                            <p>State: </p>
                            <select
                                className='address-dropdown'
                                value={state}
                                onChange={e => setState(e.target.value)}
                            >
                                {stateArr.map(state => <option key={state}>{state}</option>)}
                            </select>
                        </label>
                    </div>
                    <div className='business-input__container'>
                        <label htmlFor='zipCode'>
                            <p>Zip Code: </p>
                            <input type='text'
                                className="zipCode-text-input"
                                value={zipCode}
                                onChange={e => setZipCode(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='business-input__container'>
                        <label htmlFor='description'>
                            <p>Description: </p>
                            <textarea
                                value={description}
                                placeholder='Tell the guests about your story!'
                                className='business-description'
                                onChange={e => setDescription(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className='submit-button__container'>
                        <button className='business-submit-button' tyep='submit'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default BusinessFormPage;
