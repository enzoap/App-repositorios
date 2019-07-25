const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
}

const {nome,endereco: {cidade, estado}} = empresa

const usuario = {
    nome: 'Enzo',
    idade: 19,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP'
    }
}

console.log(nome)
console.log(estado)
console.log(cidade)

function mostraInfo({nome,idade}){
    console.log (`${nome} tem ${idade} anos.`)
}

mostraInfo(usuario)