import axios from 'axios';


class CallAPI {
    getArticles(callback) {
        axios.get('http://localhost:8080/article')
        .then(function(response) {
            callback(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}

export default CallAPI;