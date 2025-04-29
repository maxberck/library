import axios from 'axios';

const api = axios.create({
    //lien de notre api ( dossier routes/api.php)
    baseURL: 'http://localhost:8000/api'
});

export default api;