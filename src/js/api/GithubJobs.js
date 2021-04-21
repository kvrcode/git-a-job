const axios = require('axios');

const parameters = {
    CORS: 'https://cors-anywhere.herokuapp.com/',
    url: 'https://jobs.github.com/positions.json?',
    description: 'data science',
    location: '',
    lat: '', //if using lat or long, HAVE TO INCLUDE OTHER, cant include location
    long: '', //probably wont use this
    full_time: Boolean, //true: limits to only full time positions
    createURL: function(request) {
        // this refers to parameters
        let searchURL = '';
        searchURL += this.CORS;
        searchURL += this.url;
        searchURL += request;

        console.log(request);
        return searchURL;
    }
}

//check location.hostname for local host to use CORS or not

export const getJobs = (request) => {
    const url = parameters.createURL(request);
    console.log('githubjobs.js #27', url);

    axios.get(`${parameters.CORS}https://jobs.github.com/positions.json?description=${parameters.description}`)
        .then(function(response){
            //handle success
            console.log(response);
        })
        .catch(function(error){
            //handle error
            console.log(error);
        })
        .then(function(){
            //always executed
            console.log('default');
        })
}