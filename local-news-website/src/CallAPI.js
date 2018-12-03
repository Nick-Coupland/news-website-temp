import axios from 'axios';
const url = "http://localhost:8080"


class CallAPI {
    // --------------------Articles--------------------
    getArticles(callback) {
        axios.get(url + '/article')
        .then(function(response) {
            callback(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }



    // --------------------Users--------------------
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


    loginUser(data) {
        axios.post(url + '/login', {}, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": "Basic " + window.btoa(data.username + ":" + data.password)
            }
        })
        .then(function(response) {
            console.log(response);
            localStorage.setItem('username', data.username);
            localStorage.setItem('password', data.password);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}

export default CallAPI;