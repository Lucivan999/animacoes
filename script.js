const header = document.createElement('header');
header.setAttribute('id', 'header');
header.style.width = '99vw';
header.style.height = '100px';
header.style.display = 'flex'
header.style.alignItems = 'center';
header.style.backgroundColor = '#3C2A21';
document.body.appendChild(header);

const titulo = document.createElement('h1');
titulo.style.fontSize = '70px';
titulo.style.display = 'flex'
titulo.style.color = '#E5E5CB';
titulo.textContent = "Calculadora IMC";
header.appendChild(titulo);

//

const form = document.createElement('form');

form.setAttribute('id', 'formulario');
form.style.height = '70vh';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.justifyContent = 'center';
form.style.alignItems = 'center';
document.body.appendChild(form);

const primeiraDiv = document.createElement('div');
primeiraDiv.setAttribute('id', 'divprimaria');
primeiraDiv.style.display = 'flex';
primeiraDiv.style.justifyContent = 'center';
primeiraDiv.style.alignItems = 'center';
primeiraDiv.style.marginTop = '100px';
form.appendChild(primeiraDiv);

const nome = document.createElement('input');
nome.setAttribute('id', 'nome');
nome.type = 'text';
nome.style.width = '369px';
nome.style.margin = '15px'
nome.style.height = '45px';
nome.placeholder = 'Digite seu Nome';
nome.style.borderRadius = '10px';
nome.style.marginRight = '20px';
primeiraDiv.appendChild(nome);

const idade = document.createElement('input');
idade.setAttribute('id', 'idade');
idade.type = 'number';
idade.placeholder = 'Idade';
idade.style.width = '64px';
idade.style.height = '47px';
idade.style.borderRadius = '9px';
primeiraDiv.appendChild(idade);

const segundaDiv = document.createElement('div');
segundaDiv.setAttribute('id', 'secundaria');
segundaDiv.style.display = 'flex';
segundaDiv.style.justifyContent = 'center';
segundaDiv.style.alignItems = 'center';
segundaDiv.style.marginTop = '35px';
form.appendChild(segundaDiv);

const altura = document.createElement('input');
altura.type = 'number';
altura.step = '0.01';
altura.setAttribute('id', 'altura');
altura.style.width = '209px';
altura.style.height = '53px';
altura.placeholder = 'Digite sua altura';
altura.style.borderRadius = '9px';
altura.style.marginRight = '10px';
segundaDiv.appendChild(altura);

const peso = document.createElement('input');
peso.type = 'number';
peso.setAttribute('id', 'peso');
peso.style.width = '83px';
peso.style.height = '43px';
peso.placeholder = 'Peso';
peso.style.borderRadius = '9px';
peso.style.marginLeft = '10px';
segundaDiv.appendChild(peso);

const BotaoCalcular = document.createElement('button');
BotaoCalcular.setAttribute('id', 'calcular');
BotaoCalcular.type = 'button';
BotaoCalcular.style.width = '128px';
BotaoCalcular.style.height = '43px';
BotaoCalcular.innerText = 'Calcular';
BotaoCalcular.style.color = "#E5E5CB"
BotaoCalcular.style.backgroundColor = '#1A120B';
BotaoCalcular.style.borderRadius = '9px';
BotaoCalcular.style.marginTop = '30px';
form.appendChild(BotaoCalcular);

//



const div3 = document.createElement('div');
div3.setAttribute('id', 'secundaria');

div3.style.width = '100vw'
div3.style.height = '55px'


document.body.appendChild(div3)

const div4 = document.createElement('div');

div4.setAttribute.class = 'main'

div4.style.width = '200px'
div4.style.height = '200px'

document.body.appendChild(div4);

BotaoCalcular.addEventListener("click", function() {
   
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
  

    const imc = peso / (altura ** 2).toFixed(1);
  
   const saida = document.createElement('div');
   saida.style.display = "flex";
      saida.style.justifyContent = "center";
      saida.style.font = 'italic'
      saida.style.width = "70%";
      saida.style.margin = ".10% 286%";
      saida.style.padding = "1% 1%";
      saida.style.borderRadius = "9%";
   div4.appendChild(saida);
  
   if(imc < 18.5){
    saida.style.backgroundColor = '#FF8C32';
    saida.textContent = `Olá ${nome}! Meu mano, cê tem que comer. Seu Imc é ${imc.toFixed(2)}.`;
  
   }else if(imc >= 18.5 && imc < 24.9){
    saida.style.backgroundColor = '#88E1F2';
    saida.textContent = `Olá ${nome}! Academia? Seu Imc é ${imc.toFixed(2)}.`;
  
   }else if(imc >= 25.0 && imc < 29.9){
    saida.style.backgroundColor = '#00FFCA';
    saida.textContent = `Olá ${nome}! Tá no ponto. Seu Imc é ${imc.toFixed(2)}.`;
  
   }else if(imc >= 30.0 && imc < 39.9){
    saida.style.backgroundColor = '#F7D060';
    saida.textContent = `Olá ${nome}! Tá quase gordo. Seu Imc é ${imc.toFixed(2)}.`;
  
   }else if(imc > 40.0){
    saida.style.backgroundColor = '#FF6D60';
    saida.textContent = `Olá ${nome}! Tá gordo eim. Seu Imc é ${imc.toFixed(2)}.`;
    
   }
  
   setTimeout(function() {
     saida.style.display = 'none';
   }, 5000); 
  
  });


  const footer = document.createElement('footer');
footer.style.width = '100vw'
footer.style.height = '80px'
footer.style.backgroundColor = ''
footer.style.display = 'flex';
footer.style.justifyContent = 'space-around'
document.body.appendChild(footer);
























