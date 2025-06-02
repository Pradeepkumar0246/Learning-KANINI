const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(userResponse => {
    const user = userResponse.data;
    console.log("User:", user.name);
    return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(postsResponse => {
    const posts = postsResponse.data;
    if (posts[0].title.length > 0) {
      console.log("First Post Title:", posts[0].title);
    } else {
      console.log("No posts found for this user.");
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });