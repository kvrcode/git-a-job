import { getJobs } from '../api/GithubJobs.js';

const searchElements = () => {
    const searchInput = document.querySelector('.search__field');
    const searchButton = document.querySelector('.search__button');
    const locationInput = document.querySelector('.search__location');

    return [ searchInput, searchButton ]
}

const getUserSearchRequest = () => {

    const input = searchElements()[0];
    return input.value;

}

const getUserSearchLocation = () => {

    const location = '';

}

const requestIsValid = (str) => { //will have to check request against actual job titles in future? or just throw error when api call returns nothing

    if(str === '') {
        return false
    } else{
        return true
    }

}

const searchEventHandler = () => {

    const request = getUserSearchRequest();
    console.log(request);
    //also need to get location and add location input field

    if(requestIsValid(request)){
        console.log('calling api...');
        getJobs(request);
    } else{
        // throwError(); 404 Page
        console.log('error 404: Request/Page Not Found');
    }

}

export const searchEventListener = () => {

    const button = searchElements()[1];

    button.addEventListener('click', searchEventHandler);
    // button.addEventListener('keypress', (e) => {if(e.key === "Enter") {searchEventHandler()}})

}

