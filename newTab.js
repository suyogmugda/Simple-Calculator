var n = 0;
function numberfun(button){
  var num = button.value;
  n = (document.getElementById("equation").innerHTML += num);
}

function calculatefun(){
  var result = eval(n);
  document.getElementById("result").innerHTML = result;

}

function backspacefun(){
  n = n.substr(0, n.length-1);
  document.getElementById("equation").innerHTML = n;
}

function clearfun(){
  let c = document.getElementById("result").innerHTML = " ";
  let r = document.getElementById("equation").innerHTML = " ";
}
