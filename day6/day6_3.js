 const axios = require('axios');

async function fetchTodos() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
    console.log(res.data);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}setTimeout(fetchTodos,2000)
// fetchTodos();