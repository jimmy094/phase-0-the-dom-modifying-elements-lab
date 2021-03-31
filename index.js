// Write your code here!
const removeMain = document.getElementById("main");

removeMain.remove();


const newHeader = document.createElement("h1");

newHeader.innerHTML = '<h1>"Jimmy is the champion!"</h1>';

newHeader.id = 'victory';