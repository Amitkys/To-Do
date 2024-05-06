let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input_value = document.querySelector('input');

btn.addEventListener('click', function(){
  let item = document.createElement('li');
  item.innerHTML = input_value.value + " ";
  let button = document.createElement('button');
  button.innerHTML = 'Delete';
  item.appendChild(button);
  ul.appendChild(item);
  input_value.value = "";
})

ul.addEventListener('click', function(event){
  // console.log(event.target.nodeName);
  
  if(event.target.nodeName == 'BUTTON'){
    event.target.parentElement.remove();
  }
})