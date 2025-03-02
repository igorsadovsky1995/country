const BASE_URL = 'https://rest-country-api.p.rapidapi.com/';

export const  ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name) => {
    return BASE_URL + 'name/' + name;
}

export const filterByCode = (codes) => {
    return BASE_URL + 'alpha?codes=' + codes.join(',');
}

export const getHeaders = () => ({
        'x-rapidapi-host': 'rest-country-api.p.rapidapi.com',
        'x-rapidapi-key': 'ada5c86c0bmsh747ea9bd1aa92a0p1f89cdjsn8d7eed70a094'
    });