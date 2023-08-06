const cookie = document.querySelector('#cookie')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const openNewCookie = document.querySelector('#open-new')
const luck = document.querySelector('#luck')




cookie.addEventListener('click', handleLuck)
openNewCookie.addEventListener('click', handleTradeScreen)

function handleTradeScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleLuck(){
  wordLuck()
  handleTradeScreen()
}

function wordLuck(){
  const numberLuck = Math.round(Math.random()*10)
  
  
  if(numberLuck==0){luck.innerText= 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'}
  if(numberLuck==1){luck.innerText= 'A vida trará coisas boas se tiver paciência.'}
  if(numberLuck==2){luck.innerText= 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.'}
  if(numberLuck==3){luck.innerText= 'Não compense na ira o que lhe falta na razão.'}
  if(numberLuck==4){luck.innerText= 'Defeitos e virtudes são apenas dois lados da mesma moeda.'}
  if(numberLuck==5){luck.innerText= 'A maior de todas as torres começa no solo.'}
  if(numberLuck==6){luck.innerText= 'Não há que ser forte. Há que ser flexível.'}
  if(numberLuck==7){luck.innerText= 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?'}
  if(numberLuck==8){luck.innerText= 'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.'}
  if(numberLuck==9){luck.innerText= 'As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.'}
  if(numberLuck==10){luck.innerText= 'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.'}

  return luck.innerText

}

