import {useDispatch, useSelector} from "react-redux";
import {changeCity} from "../actions/cityAction.js";

const Form = () => {
const {city} = useSelector(state => state.cityState)
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(changeCity(e.target.value));
    };

    const getCity = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={handleChange} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;