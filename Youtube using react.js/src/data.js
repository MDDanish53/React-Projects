export const API_KEY = 'AIzaSyCh77Szp13tugO5IjfHr9HsZVuMTR_ld0o';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value/1000000)+"M";
    }
    else if (value >= 1000) {
        return Math.floor(value/1000)+"K";
    } else {
        return value
    }
}