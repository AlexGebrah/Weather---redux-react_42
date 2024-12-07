export const CHANGE_WEATHER = 'CHANGE_WEATHER';

export const changeWeather = (weather) => ({
    type: CHANGE_WEATHER,
    payload: weather
})