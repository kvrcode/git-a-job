import { getJobs } from '../api/GithubJobs.js';

const searchElements = () => {
    const searchInput = document.querySelector('.search__field');
    const searchButton = document.querySelector('.search__button');

    return [ searchInput, searchButton ]
}

const getUserSearchRequest = () => {

    const input = searchElements()[0];
    return input.value;

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

    if(requestIsValid(request)){
        // makeAPICall();
        getJobs();
        console.log('calling api...');
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

