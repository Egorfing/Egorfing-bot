let askButton = document.getElementById('myButton');

askButton.addEventListener('click', function(){
 let text = document.getElementById('question').value.toLowerCase();
 let question = document.createElement('p');
 question.innerText = text;
 let answerSection = document.getElementById('answer');
 answerSection.appendChild(question);
 let botAnswer = document.createElement('div');
 answerSection.appendChild(botAnswer);
if(text.includes('elbrus')){
botAnswer.innerText = 'Класс! хочешь узнать)';
} else if (text.includes('js')){
botAnswer.innerText = 'здесь не расскажу';
} else {
  botAnswer.innerText = 'пиши в инстаграм';
}
})
 
