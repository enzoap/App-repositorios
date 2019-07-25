//import { rejects } from "assert";

/* const nome = 'Enzo'
const idade = 19

const ususario = {
    nome,
    idade,
    empresa: 'Estudante'
}

console.log(ususario)
 */

// REST

/* const usuario = {
    nome: 'Enzo',
    idade: 19,
    empresa: 'Estudante'
} */

/* const { nome, ...resto} = usuario

const array = [1, 2 , 3, 4]

const [ a, b, ...c] = array
 */


/* function soma(a, b,...params){
    return params
}

console.log(soma(1,3,4, 5 , 6)) */


//SPREAD

/* const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [ ...arr1, ...arr2]
console.log(arr3)



const usuario1 = {
    nome: 'Enzo',
    idade: 19,
    empresa: 'estudante'
}

const usuario2 = { ...usuario1,nome: 'Gabriel'}
console.log(usuario2) */

/* /* const usuario = {
    nome: 'Enzo',
    idade: 19,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP'
    },
} */

/* function mostraNome({nome,idade}){
    console.log(nome,idade)
}




const soma = (a = 3,b =6 ) => a + b
  
 console.log(soma(1))
console.log(soma())
 


const arr = [1, 3, 4, 5, 6]


const oldArr = arr.map(function(item){
    return item + 2
})

const newArr = arr.map(item => item * 2)

console.log(`Funçao anonima ${oldArr}`)
console.log(`Arrow function ${newArr}`)

const teste = () => ({ nome:'teste'})
    


console.log(teste())  */

//import * as funcoes from '../funcoes'

//import somaFunction from './soma'

//console.log(funcoes.soma(1,2))
//console.log(funcoes.default(4,2))

//console.log(sub(1,2))
//console.log(soma(1,1))

/*  const minhaPromisse = () => new Promise((resolve)=> {
    setTimeout(()=> {resolve()},1000 )
})
 */
/*  async function executaPromise(){
    await minhaPromisse()
    console.log('ok')
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())
} */

/*  const executaPromise = async () => {
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())
} */

//executaPromise() 

/*  import axios from 'axios'

class Api {
    static async getUserInfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        } catch (err){
            console.warn('Erro na API')
        }
            
    }
}

Api.getUserInfo('enzoap')
Api.getUserInfo('enzoapasd') 
 */
 /* const delay = () => new Promise((resolve)=>{
    setTimeout(()=> {resolve()},1000)
})
async function umPorSegundo(){
   await delay();
   console.log('1s');

   await delay();
   console.log('2s');

   await delay();
   console.log('3s');
}



 import axios from 'axios' */

/* async function getUserFromGithub(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    }catch (err){
        console.log('Usúario não existe')
    }
   
}

getUserFromGithub('enzoap')
getUserFromGithub('enzoapasd')

class gitHub {
    static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data)
        }catch (err){
            console.log('Repositório não existe')
        }
        
    }
}
 */



/* const  buscaUsuario = async (usuario)  => {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
    console.log(response.data)
    }catch (err){
        console.log('Usuario não existe')
    }
    
}

buscaUsuario('enzoap') */