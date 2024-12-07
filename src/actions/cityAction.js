export const CHANGE_CITY = 'CHANGE_CITY';

export const changeWeather = (city) => ({
    type: CHANGE_CITY,
    payload: city
})