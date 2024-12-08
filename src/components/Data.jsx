import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {api_key, base_url} from "../utils/constants.js";
import {useDispatch, useSelector} from "react-redux";
import {changeMessage} from "../actions/messageAction.js";
import {changeWeather} from "../actions/weatherAction.js";
import {useEffect} from "react";

const Data = () => {
    const {city} = useSelector(state => state.cityState)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!city) return;
        console.log(`Fetching data for city: ${city}`);
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => {
                if (!result.ok) {
                    throw new Error(`HTTP error! status: ${result.status}`);
                }
                return result.json();
            })
            .then(data => {
                if (!data.sys || !data.main) {
                    throw new Error('Invalid response structure');
                }
                dispatch(changeWeather({
                    country: data.sys.country || '',
                    city: data.name || '',
                    temp: data.main.temp || 0,
                    pressure: data.main.pressure || 0,
                    sunset: data.sys.sunset ? new Date(data.sys.sunset * 1000) : new Date()
                }))
                dispatch(changeMessage(''));
            })
            .catch(e => {
                console.error(e.message);
                dispatch(changeMessage('Enter correct city name'));
            })
    }, [city]);

    return (
        <div>
            <Form/>
            <Weather/>
        </div>
    );
};

export default Data;