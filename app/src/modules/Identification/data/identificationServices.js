import request from '../../../commons/util/request';
//TODO: remover essa api foi usada apenas para simular o backend
import uuidv1 from 'uuid/v1';


const API_URL_BASE = `/identifications`;

function getAll(payload) {
    var { filter, order } = payload;
    console.log("getall   " + JSON.stringify(payload))
    var identifications = [
        { id: uuidv1(), value: "65668200000162", type: 'cnpj' },
        { id: uuidv1(), value: "44654028000118", type: 'cnpj', blacklist: true },
        { id: uuidv1(), value: "41472428000114", type: 'cnpj' },
        { id: uuidv1(), value: "46538453000177", type: 'cnpj' },
        { id: uuidv1(), value: "03063077000107", type: 'cnpj', blacklist: true },
        { id: uuidv1(), value: "61342782704", type: 'cpf' },
        { id: uuidv1(), value: "35152851806", type: 'cpf' },
        { id: uuidv1(), value: "04332642414", type: 'cpf', blacklist: true },
        { id: uuidv1(), value: "10735677611", type: 'cpf' },
        { id: uuidv1(), value: "56848434760", type: 'cpf', blacklist: true }
    ];
    return {
        data: { identifications: !filter ? identifications : identifications.filter(data => data.value.includes(filter)) }
    }

}

function newIndentification(identification) {
    identification.id = uuidv1();
    return { data: { ...identification } };
}

function updateIndentification(identification) {
    return { data: { ...JSON.parse(JSON.stringify(identification)) } };
}

function deleteIndentification(id) {
    return { data: { id }};
}

//TODO: por mascara como reponsabilidade do backend e retirar iscpf para um enum com essa responsabilidade.
export default {
    query: (data) => Promise.resolve(getAll(data.payload)),
    newIdentification: identification => Promise.resolve(newIndentification(identification.payload)),
    updateIdentification: identification => Promise.resolve(updateIndentification(identification.payload)),
    deleteIdentification: identification => Promise.resolve(deleteIndentification(identification.payload.id)),
};



//newIdentification: identification => request.save(API_URL_BASE, identification),
//updateIdentification: identification => request.update(`${API_URL_BASE}/${identification.id}`, identification),
// query: () => request.query(`${API_URL_BASE}`)


