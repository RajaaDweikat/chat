let msgs = [];
let num = 0;


function sendMsg() {
  let input = document.getElementById("inputMsg").value;
  msgs.push(input);
  document.getElementById("inputMsg").value = "";
  localStorage.setItem("messages", JSON.stringify(msgs));
  let x = JSON.parse(localStorage.getItem("messages"));
  let newDiv=document.createElement('div');
  newDiv.id="sender-msg";
  newDiv.className="flex-end";
  document.getElementById("Msg").appendChild(newDiv);
  let para=document.createElement('p');
  para.innerHTML=x[num];
  newDiv.appendChild(para)
  num++;

  // const recivesMessage = $(`<div id="sender-msg" class="flex-end"></div>`);
  // recivesMessage.append(x[num]);
}

function receiveMsg() {
  let input = document.getElementById("inputMsg").value;
  msgs.push(input);
  document.getElementById("inputMsg").value = "";
  localStorage.setItem("messages", JSON.stringify(msgs));
  let x = JSON.parse(localStorage.getItem("messages"));
  let rDiv=document.createElement('div');
  rDiv.id="receiver-msg";
  rDiv.className="display flex-start";
  document.getElementById("Msg").appendChild(rDiv);
  let img=document.createElement('img');
  img.src="./assets/imges/chatbot-icon.jpg"
  img.className="img-container";
  rDiv.appendChild(img)
  let p=document.createElement('p');
  p.innerHTML=x[num];
  rDiv.appendChild(p)
  

  num++;
}





