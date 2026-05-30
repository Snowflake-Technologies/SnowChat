console.log("❄️ SnowChat Started");

const messages =
document.getElementById("messages");

const input =
document.getElementById("messageInput");

const sendBtn =
document.getElementById("sendBtn");

function addMessage(text){

const div =
document.createElement("div");

div.className =
"message";

div.textContent =
text;

messages.appendChild(div);

messages.scrollTop =
messages.scrollHeight;
}

sendBtn.addEventListener(
"click",
sendMessage
);

input.addEventListener(
"keypress",
e => {

if(e.key === "Enter"){

sendMessage();

}

}
);

function sendMessage(){

const text =
input.value.trim();

if(!text) return;

addMessage(text);

input.value = "";
}
