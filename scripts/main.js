let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kobe.png') {
      myImage.setAttribute('src', 'images/front.jpg');
    } else {
      myImage.setAttribute('src', 'images/kobe.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      alert('请输入名字');
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '欢迎, ' + myName;
    }
  }
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '欢迎, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
 }