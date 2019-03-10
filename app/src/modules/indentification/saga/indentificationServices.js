import request from '../../../commons/request';

const API_URL_BASE = `/indentifications`;

export default {
    query: () => Promise.resolve({data : {indetfications:[{cpf:"064.511.409-02", isCpf:true}]}})
};

// query: () => request.query(`${API_URL_BASE}`)
