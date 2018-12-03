import axios from 'axios';
const url = "http://localhost:8080"


class CallAPI {
    getArticles(callback) {
        axios.get(url + '/article')
        .then(function(response) {
            callback(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }


    addUser(data, callback) {
        axios.post(url + '/user', {
            username: data.username,
            password: data.password
        })
        .then(function(response) {
            callback(null, response);
        })
        .catch(function(error) {
            callback(error);
        });
    }
}

export default CallAPI;