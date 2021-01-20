var Batismo = require('../models/batismos')

module.exports.listar = () => {
    return Batismo
        .find({}, { date: 1, title: 1, ref: 1 })
        .exec()
}

module.exports.listar_by_id = (id) => {
    return Batismo
        .find({ "href": "https://arquivo-abm.madeira.gov.pt/details?id=" + id })
        .exec()
}


module.exports.listar_by_ano = (ano) => {
    return Batismo
        .find({ "date": {$regex: ano+'-[0-9][0-9]-[0-9][0-9]/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]'}})
        .exec()
}

module.exports.listar_batisado = () => {
    return Batismo
        .find({}, { "title": {$regex:'Registo de batismo n.º \d: '} })
        .sort(nome)
        .exec()
}


