 const axios = require('axios');
 function getUser(id, callback) {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
          const user = response.data;
          callback(user.name); 
        })
        .catch(error => {
          console.error("Error fetching user:", error);
        });
    }
    function printUserName(name) {
      console.log("User name:", name);
    }
    getUser(3, printUserName);
    