import { useSelector} from "react-redux";

const Weather = () => {
    const {weather} = useSelector(state => state.weatherState);
    const {message} = useSelector(state => state.messageState)

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weather.country}, {weather.city}</p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {weather.sunset.toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    )
}

export default Weather;