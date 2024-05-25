var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var button = document.getElementById("button");
var result = document.getElementById("result");
var ele = document.getElementById("ele");
var xbutton = document.getElementById("closeBtn");
var arr = [];

if (localStorage.getItem("array") == null) arr = [];
else {
  arr = [JSON.parse(localStorage.getItem("array"))];
}
function add() {
  if (validate(input1) && validate(input2)) {
    var inputs = {
      name: input1.value,
      url: input2.value,
    };
    arr.push(inputs);
    localStorage.setItem("array", JSON.stringify(arr));
  }
}
function clear() {
  input1.value = "";
  input2.value = "";
}

button.onclick = function () {
  add();
  clear();
  display2();
  display();
  console.log(arr);
};

function display() {
  ele.classList.replace("d-none", "d-block");
}
function display4() {
  ele.classList.replace("d-block", "d-none");
}

function display2() {
  for (var i = 0; i < arr.length; i++) {
    box2 = `<div class="last-div d-flex bg-white mt-4 py-2"> 
  <div class="fw-semibold fs-6" id="index">
  Index<br>${i + 1}	
  </div>
<div class="fw-semibold fs-6" id="websiteName">
Website Name	<br>${arr[i].name}
</div>
<div class="fw-semibold fs-6" id="visit">
<a href=" " class="text-decoration-none text-black">Visit<br>${arr[i].url}
 </a>
</div>
<button class="fw-semibold fs-6 border-0" id="del" type="button" onclick="del(${i})">
	Delete
  </button>
</div> `;
  }
  result.innerHTML = box2;
}
function del(i) {
  arr.splice(i, 1);
  localStorage.setItem("array", JSON.stringify(arr));
  display2();
}
function validate(ele) {
  var regex = {
    input1: /^[\w]{3,10}$/,
    input2: /^[a-zA-z]{4,12}(@)(gmail|yahoo)(\.com)$/,
  };
  if (regex[ele.id].test(ele.value)) {
    console.log("match");
    ele.nextElementSibling.classList.replace("d-block", "d-none");
    ele.classList.remove("is-invalid");
    ele.classList.add("is-valid");
    return true;
  } else {
    console.log("not match");
    ele.nextElementSibling.classList.replace("d-none", "d-block");
    ele.classList.add("is-invalid");
    ele.classList.remove("is-valid");
    return false;
  }
}
