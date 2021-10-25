import axios from 'axios';

export const getUsers = () => {
    return axios.get('/users', {
        params: {
            /* Emula un limite muy grande, con el fin de
            obtener todos los registros */
            limit: 1000
        }
    })
}