function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<i><b>Obrigado por clicar</b></i>"
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar :) ");
}
function Redirecionar(){
window.open("https://www.youtube.com/");
window.location.href = "https://www.youtube.com/";
}
function trocar(elemento){
    elemento.innerHTML = "obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    //alert("Trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Página carregada");
}
function funcaochange(elemento){
   alert("O valor é "+elemento.value);
}


/*function soma (n1, n2){
    return n1 + n2;
}
alert(soma(5, 8));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
    if(idade>=18){
        return true;
    }else{
        return false;
    }
}
var idade = prompt("Qual sua idade");
if(validaIdade(idade)==true) console.log("validado");
else console.log("não validado");
*/

/*var d = new Date();
alert(d);
alert(d.getDay());
*/

/*var count=0;
while (count<=5){
    alert(count);
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual a sua idade");


if (idade>=18){
    alert("maior de idade");
}else {
    alert("menor de idade");
}
*/

/*var frutas = [{nome: "maçã",cor: "vermelho"}, {nome: "uva",cor: "roxo"}, {nome: "pera",cor: "amarelo"}];
console.log(frutas);
console.log(frutas[0].cor);
var nome= "Israel Nicolau";
var idade= 21;
var idade2= 10;
//alert(nome + " tem "+idade+" anos.");
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(nome.replace("Nicolau", "Chagas")); 

var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" tem gosto de "))

//alert(lista[2]);

*/