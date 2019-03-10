import request from '../../../commons/request';
//TODO: remover essa api foi usada apenas para simular o backend
import uuidv1 from 'uuid/v1';


const API_URL_BASE = `/identifications`;

function getAll(payload) {
    var { filter, order } = payload;
    console.log("getall   " + JSON.stringify(payload))
    var identifications = [
        { id : uuidv1(), value: "65.668.200/0001-62", type: 'cpf' },
        { id : uuidv1(), value: "44.654.028/0001-18", type: 'cpf', blacklist: true },
        { id : uuidv1(), value: "41.472.428/0001-14", type: 'cpf' },
        { id : uuidv1(), value: "46.538.453/0001-77", type: 'cpf' },
        { id : uuidv1(), value: "03.063.077/0001-07", type: 'cpf', blacklist: true },
        { id : uuidv1(), value: "613.427.827-04", type: 'cnpj' },
        { id : uuidv1(), value: "351.528.518-06", type: 'cnpj' },
        { id : uuidv1(), value: "043.326.424-14", type: 'cnpj', blacklist: true },
        { id : uuidv1(), value: "107.356.776-11", type: 'cnpj' },
        { id : uuidv1(), value: "568.484.347-60", type: 'cnpj', blacklist: true }
    ];
    return {
        data: { identifications: !filter ? identifications : identifications.filter(data => data.value.includes(filter)) }
    }

}

function newIndentification(identification) {
    identification.id = uuidv1();
    return identification;
}

//TODO: por mascara como reponsabilidade do backend e retirar iscpf para um enum com essa responsabilidade.
export default {
    query: (data) => Promise.resolve(getAll(data.payload)),
    newIdentification: identification => Promise.resolve(newIndentification(identification)),
    updateIdentification: identification => Promise.resolve(identification),
};



//newIdentification: identification => request.save(API_URL_BASE, identification),
//updateIdentification: identification => request.update(`${API_URL_BASE}/${identification.id}`, identification),

// query: () => request.query(`${API_URL_BASE}`)


