import request from '../../../commons/request';

const API_URL_BASE = `/identifications`;

export default {
    query: () => Promise.resolve({data : {identifications:[{cpf:"064.511.409-02", isCpf:true}]}})
};

// query: () => request.query(`${API_URL_BASE}`)
