const axios = require("axios");
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    console.log(response);
})
const axios = require("axios");
axios.get('https://jsonplaceholder.typicode.com//posts?userId=1')
.then(function(response){
    console.log(response);
})

  
