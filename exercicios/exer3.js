const arr = [1, 2, 3, 4, 5]

console.log(arr.map(item => item +10))

const usuario = {
    nome: 'Enzo',
    idade: 19
}

const mostraIdade = (usuario => console.log(usuario.idade))

mostraIdade(usuario)

const nome = 'Enzo'
const idade = 19

const mostraUsuario = ((nome = 'Enzo', idade = 15)=> ({nome,idade}))

console.log(mostraUsuario(nome,idade))
console.log(mostraUsuario(nome))

//const promise = () => new Promise((resolve,reject) => {resolve()})