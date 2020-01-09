let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let yearDiv = document.querySelector('#yearDiv');
let yearText = document.querySelector('#yearText');

let numberInput = document.querySelector("#numberInput");
numberInput.addEventListener('input', getFactNumber);

let yearInput = document.querySelector("#yearInput");
yearInput.addEventListener('input', getFactYear);



// with AJAX
/*
function getFactNumber(){
  let number = numberInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://numbersapi.com/'+number);
  xhr.onload = function(){
    if(this.status == 200 && number != ''){
      fact.style.display = 'block';
      factText.innerText = this.responseText;
    }
  }
  xhr.send();
}
*/

// with fetchAPI
function getFactNumber(){
  let number = numberInput.value;
  
  fetch('http://numbersapi.com/'+number)
  .then(res => res.text())
  .then(data => {
    if(number != ''){
      fact.style.display = 'block';
      factText.innerText = data;
    }
  })
  .catch(err => console.log(err));
}

// with fetchAPI
function getFactYear(){
  let year = yearInput.value;
  
  fetch('http://numbersapi.com/'+year+'/year')
  .then(res => res.text())
  .then(data => {
    if(year != ''){
      yearDiv.style.display = 'block';
      yearText.innerText = data;
    }
  })
  .catch(err => console.log(err));
}
