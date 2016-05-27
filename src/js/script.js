console.log('Hello, front end');

document.addEventListener('DOMContentLoaded', function(){
  // ============ Default function removal ===========
  document.getElementById("tmp-input").addEventListener("enter", function(event){
  event.preventDefault();
  })
  document.getElementById("convert-btn").addEventListener("click", function(event){
  event.preventDefault();
  })
  document.getElementById("clear-btn").addEventListener("click", function(event){
  event.preventDefault();
  })

  // =================================================
  document.getElementById('convert-btn').addEventListener('click', convertTmp);
  document.getElementById('clear-btn').addEventListener('click', clearTmp)
  convertTmp();
})


function convertTmp(){
  var input = document.getElementById('tmp-input').value;
  if(document.getElementById('radioF').checked) {
    document.getElementById('convertedTemp').textContent = (input - 32) * (5/9);
  } else {
    document.getElementById('convertedTemp').textContent = (input * (9/5)) + 32;
  }

}

function clearTmp(){
  document.getElementById('tmp-input').value = "";
  convertTmp();
  document.getElementById('convertedTemp').textContent = "";
}
