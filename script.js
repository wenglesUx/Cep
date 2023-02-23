var inputvalue = document.querySelector('.inputvalue')
var button = document.querySelector('.button')
var cep = document.querySelector('.cep')

var logradouro = document.querySelector('.logradouro')
var complemento = document.querySelector('.complemento')
var bairro = document.querySelector('.bairro')
var localidade = document.querySelector('.localidade')
var uf = document.querySelector('.uf')
var ibge = document.querySelector('.ibge')
var gia = document.querySelector('.gia')
var ddd = document.querySelector('.ddd')
var siafi = document.querySelector('.siafi')

button.addEventListener('click',function(){

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
 var siafivalue = data['siafi'];


 cep.innerHTML =cepvalue;
 logradouro.innerHTML =logradourovalue;
 complemento.innerHTML =complementovalue;
 bairro.innerHTML =bairrovalue;
 localidade.innerHTML =localidadevalue;

 uf.innerHTML =ufvalue;
 ibge.innerHTML =ibgevalue;
 gia.innerHTML =giavalue;
 ddd.innerHTML =dddvalue;
 siafi.innerHTML =siafivalue;


})
.catch(err => alert("cep não identificado"))

})