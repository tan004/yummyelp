import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { stateArr, cityArr } from "../BusinessFormPage/addressArr";
import { getOneBusiness, updateBusiness } from "../../store/business";

const BusinessEditPage = () => {
    const { id } = useParams();

    const user = useSelector(state => state.session.user)
    const business = useSelector(state => state.business[id])

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneBusiness(id))
    }, [dispatch,id])

    const BusinessEdit = ({ business }) => {


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

        if (user?.id !== business?.ownerId) {
            history.push(`/business/${business?.id}`)
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
                let newBusiness = await dispatch(updateBusiness(form));
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
                <h1 className='header'>Keep your information up to date!</h1>
                <div className='errors__container'>
                <div className='all-errors'>
                    {errors && errors.map((error, idx) => <p className='error-text' key={idx}><i className="fas fa-exclamation-circle"></i>{error}</p>)}
                </div>
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
                                    {cityArr.map(el => <option value={el} key={el}>{el}</option>)}
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
                                    {stateArr.map(stateEle => <option key={stateEle}>{stateEle}</option>)}
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

                        <div className='edit-form__button'>
                            <button className='update-button' type='submit'>Update</button>
                            <button className='cancel-button' type='submit'><Link to={`/business/${business?.id}`}>Cancel</Link></button>
                        </div>

                    </form>
                </div>
            </div>
        )
    };

    return (
    <>
            {
                business && <BusinessEdit business={business}/>
            }
        </>
    );

};
export default BusinessEditPage;
