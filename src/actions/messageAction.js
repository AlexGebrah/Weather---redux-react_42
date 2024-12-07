export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

export const changeWeather = (message) => ({
    type: CHANGE_MESSAGE,
    payload: message
})