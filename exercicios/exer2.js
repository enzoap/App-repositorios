const usuarios = [
    {nome:'Diego', idade: 23, empresa: 'Rocktseat'},
    {nome: 'Enzo', idade: 19, empresa: 'Nenhuma'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'},
]

const idades = usuarios.map(function (item){
    return item.idade
})
console.log(idades)

const filterRocktseat = usuarios.filter(function(item){
    return item.idade ==23 && item.empresa =='Rocktseat'
})

console.log(filterRocktseat)

const findGoogle = usuarios.find(item => item.empresa === 'Google')

console.log(findGoogle)

 const mult = usuarios
 .map(item => ({ ...item, idade: item.idade * 2 }))
 .filter(item => item.idade <= 50);

console.log(mult)

const calculo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

console.log(calculo);
