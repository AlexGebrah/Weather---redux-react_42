import {useDispatch} from "react-redux";

import {useState} from "react";
import {changeCity} from "../actions/cityAction.js";

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = e => {
        setInputValue(e.target.value);
    };

    const getCity = e => {
        e.preventDefault();
        dispatch(changeCity(inputValue));
        console.log('City submitted:', inputValue);
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={handleChange} type="text" value={inputValue || ''} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;