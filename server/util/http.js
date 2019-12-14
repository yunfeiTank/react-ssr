import axios from 'axios';
const base = axios.create({
    baseURL: 'http://localhost:9090',
});
const Http = {
    'POST': () => base.post(),
    'GET': (url, res) => base.get(url)
        .then(function (data) {
            res(data);
        })
        .catch(function (error) {
            console.log(url);
        })
}
export default Http;