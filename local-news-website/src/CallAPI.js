import axios from 'axios';
// Configures API URL
const url = "http://localhost:8080"


class CallAPI {
    // --------------------Articles--------------------
    // Pulls article data from API
    getArticles(callback) {
        axios.get(url + '/article', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": "Basic " + window.btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
            }})
        .then(function(response) {
            console.log(response);
            callback(null, response.data);
        })
        .catch(function(error) {
            console.log(error);
            callback(error);
        });
    }


    // Adds user inputted article to API
    addArticle(data, callback) {
        const formData = new FormData();
        formData.append('articleImage', data.image);
        formData.append('title', data.title);
        formData.append('body', data.body);
        axios.post(url + '/article', formData, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Authorization": "Basic " + window.btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
        }})
        .then(function(response) {
            console.log(response);
            callback(null);
        })
        .catch(function(error) {
            console.log(error);
            callback(error);
        });
    }


    // Pins article at top of homepage list (admin only)
    pinArticle(id) {
        axios.get(url + '/article/pin/' + id, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": "Basic " + window.btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }


    // Unpins article from top of homepage list (admin only)
    unpinArticle(id) {
        axios.get(url + '/article/unpin/' + id, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": "Basic " + window.btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }


    // Likes article
    likeArticle(id) {
        axios.get(url + '/article/like/' + id, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": "Basic " + window.btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }


    // Unlikes article
    unlikeArticle(id) {
        axios.get(url + '/article/unlike/' + id, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": "Basic " + window.btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password'))
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }



    // --------------------Users--------------------
    // Sends new user data to API
    addUser(data, callback) {
        axios.post(url + '/user', {
            username: data.username,
            password: data.password
        })
        .then(function(response) {
            console.log(response);
            callback(null);
        })
        .catch(function(error) {
            console.log(error);
            callback(error);
        });
    }


    // Sends inputted user data to API for authentication
    loginUser(data, callback) {
        axios.post(url + '/login', {}, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Authorization": "Basic " + window.btoa(data.username + ":" + data.password)
            }
        })
        .then(function(response) {
            console.log(response);
            // Stores user credentials to local storage once authenticated
            localStorage.setItem('username', data.username);
            localStorage.setItem('password', data.password);
            callback(null);
        })
        .catch(function(error) {
            console.log(error);
            callback(error);
        });
    }
}

export default CallAPI;