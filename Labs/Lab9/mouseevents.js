// JavaScript Document
function mOver(obj) {
    obj.innerHTML = "Thank You"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

function mDown(obj) {
    obj.style.backgroundColor = "lightblue";
    obj.innerHTML = "Release Me";
}

function mUp(obj) {
    obj.style.backgroundColor="lightgreen";
    obj.innerHTML="Thank You";
}
