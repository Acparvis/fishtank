import axios from 'axios';

const tankPost = (data) => {
  //example api to post fish data to, just returns back the JSON that was sent, can be viewed i the console.
  axios.post(`https://jsonplaceholder.typicode.com/users`, { data })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
};

export default tankPost;