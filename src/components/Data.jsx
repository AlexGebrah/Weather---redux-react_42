import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {api_key, base_url} from "../utils/constants.js";
import {useDispatch, useSelector} from "react-redux";
import {changeMessage} from "../actions/messageAction.js";
import {changeWeather} from "../actions/weatherAction.js";


const Data = () => {
    const {city} = useSelector(state => state.cityState)
    const dispatch = useDispatch();

    fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        .then(result => result.json())
        .then(data => {
            dispatch(changeWeather({
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: new Date(data.sys.sunset * 1000)
            }))
            const message = '';
            dispatch(changeMessage(message))
        })
        .catch(e => {
            console.log(e);
            const message = 'Enter correct city name';
            dispatch(changeMessage(message))
        })

    return (
        <div>
            <Form/>
            <Weather/>
        </div>
    );
};

export default Data;