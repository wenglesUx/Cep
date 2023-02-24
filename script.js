var inputvalue = document.querySelector('.inputvalue')
var button = document.querySelector('.button')
var cep = document.querySelector('.cep')
var load = document.querySelector('#load')
var logradouro = document.querySelector('.logradouro')
var complemento = document.querySelector('.complemento')
var bairro = document.querySelector('.bairro')
var localidade = document.querySelector('.localidade')
var uf = document.querySelector('.uf')
var ibge = document.querySelector('.ibge')
var gia = document.querySelector('.gia')
var ddd = document.querySelector('.ddd')


button.addEventListener('click',runfunction)

function runfunction(){

fetch('https://viacep.com.br/ws/'+inputvalue.value+'/json/')

.then(response => response.json())
.then(data => {
    
 var cepvalue = data['cep'];
 var logradourovalue = data['logradouro'];
 var complementovalue = data['complemento'];
 var bairrovalue = data['bairro'];
 var localidadevalue = data['localidade'];


 var ufvalue = data['uf'];
 var ibgevalue = data['ibge'];
 var giavalue = data['gia'];
 var dddvalue = data['ddd'];



 cep.innerHTML =cepvalue;
 logradouro.innerHTML =logradourovalue;
 complemento.innerHTML =complementovalue;
 bairro.innerHTML =bairrovalue;
 localidade.innerHTML =localidadevalue;

 uf.innerHTML =ufvalue;
 ibge.innerHTML =ibgevalue;
 gia.innerHTML =giavalue;
 ddd.innerHTML =dddvalue;
 


})
} 


inputvalue.addEventListener('keydown',(e) =>{
 if (e.keyCode !== 13)return
        runfunction()
    

})
   
