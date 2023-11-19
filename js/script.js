const nomeCidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const textoCidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const prev = document.querySelector('.texto-previsao')
const chave = 'f1fdbb8ca1cc559bd0dd0d90c84b162e'

botao.addEventListener('click', buscarCidade)


async function buscarCidade(){

    let cidade = nomeCidade.value 
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`)

    .then(resposta=>resposta.json())

    textoCidade.textContent= dados.name
    temperatura.textContent =(dados.main.temp).toFixed(0)+"ºC"
    prev.textContent= dados.weather[0].description

    console.log(dados)
}
