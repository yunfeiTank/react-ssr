import axios from 'axios';
const base = axios.create({
    baseURL: 'http://localhost:9090',
});
const Http = {
    'POST': () => base.post(),
    'GET': (url, params, res) => base.get(url)
        .then(function (data) {
            res.send(data.data);
        })
        .catch(function (error) {
            res.send(error);
        })
}
export default Http;