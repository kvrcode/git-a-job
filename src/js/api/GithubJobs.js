const axios = require('axios');

const parameters = {
    CORS: 'https://cors-anywhere.herokuapp.com/',
    url: 'https://jobs.github.com/positions.json?',
    description: '',
    location: '',
    lat: '', //if using lat or long, HAVE TO INCLUDE OTHER, cant include location
    long: '', //probably wont use this
    full_time: Boolean, //true: limits to only full time positions
    createURL: function() {
        // this refers to parameters
        let request = '';
        request += this.url;

        console.log(request);
        return request
    }
}

//check location.hostname for local host to use CORS or not

export const getJobs = (request) => {
    axios.get()
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