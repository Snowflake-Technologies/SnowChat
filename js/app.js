/* =====================================================
   SNOWCHAT ULTIMATE
   APP.JS
===================================================== */

console.log("❄️ SnowChat Started");

/* =====================================================
   ELEMENTS
===================================================== */

const messages = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

const profileAvatar = document.getElementById("profileAvatar");
const avatarPreview = document.getElementById("avatarPreview");
const profileModalAvatar = document.getElementById("profileModalAvatar");

const profileName = document.getElementById("profileName");
const modalName = document.getElementById("modalName");

const userStatus = document.getElementById("userStatus");
const modalBio = document.getElementById("modalBio");

const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeSettings = document.getElementById("closeSettings");

const saveSettings = document.getElementById("saveSettings");

const avatarInput = document.getElementById("avatarInput");

const displayName = document.getElementById("displayName");
const bio = document.getElementById("bio");
const customStatus = document.getElementById("customStatus");

const profileModal = document.getElementById("profileModal");

const themeToggle = document.getElementById("themeToggle");

const toastContainer = document.getElementById("toastContainer");

const emojiBtn = document.getElementById("emojiBtn");
const emojiPicker = document.getElementById("emojiPicker");

/* =====================================================
   STORAGE
===================================================== */

const STORAGE = {

    profile: "snowchat_profile",

    messages: "snowchat_messages",

    theme: "snowchat_theme"
};

/* =====================================================
   TOASTS
===================================================== */

function showToast(text){

    const toast =
    document.createElement("div");

    toast.className = "toast";

    toast.textContent = text;

    toastContainer.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    },3000);
}

/* =====================================================
   PROFILE
===================================================== */

function loadProfile(){

    const data = JSON.parse(

        localStorage.getItem(
            STORAGE.profile
        )

        ||

        "{}"
    );

    if(data.name){

        profileName.textContent =
        data.name;

        modalName.textContent =
        data.name;

        displayName.value =
        data.name;
    }

    if(data.bio){

        modalBio.textContent =
        data.bio;

        bio.value =
        data.bio;
    }

    if(data.status){

        userStatus.textContent =
        data.status;

        customStatus.value =
        data.status;
    }

    if(data.avatar){

        profileAvatar.src =
        data.avatar;

        avatarPreview.src =
        data.avatar;

        profileModalAvatar.src =
        data.avatar;
    }
}

function saveProfileData(){

    const data = {

        name:
        displayName.value,

        bio:
        bio.value,

        status:
        customStatus.value,

        avatar:
        profileAvatar.src
    };

    localStorage.setItem(

        STORAGE.profile,

        JSON.stringify(data)

    );

    loadProfile();

    showToast(
        "✅ Profile Saved"
    );
}

/* =====================================================
   SETTINGS
===================================================== */

settingsBtn.addEventListener(
"click",
() => {

settingsModal.classList.add(
"active"
);

});

closeSettings.addEventListener(
"click",
() => {

settingsModal.classList.remove(
"active"
);

});

saveSettings.addEventListener(
"click",
() => {

saveProfileData();

settingsModal.classList.remove(
"active"
);

});

/* =====================================================
   AVATAR UPLOAD
===================================================== */

avatarInput.addEventListener(
"change",
e => {

const file =
e.target.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload = () => {

profileAvatar.src =
reader.result;

avatarPreview.src =
reader.result;

profileModalAvatar.src =
reader.result;

};

reader.readAsDataURL(file);

});

/* =====================================================
   PROFILE POPUP
===================================================== */

profileAvatar.addEventListener(
"click",
() => {

profileModal.classList.add(
"active"
);

});

profileModal.addEventListener(
"click",
e => {

if(
e.target === profileModal
){

profileModal.classList.remove(
"active"
);

}

});

/* =====================================================
   MESSAGE SYSTEM
===================================================== */

function createMessage(text){

const wrapper =
document.createElement("div");

wrapper.className =
"message";

const avatar =
profileAvatar.src;

const username =
profileName.textContent;

const time =
new Date()
.toLocaleTimeString(
[],
{
hour:"2-digit",
minute:"2-digit"
}
);

wrapper.innerHTML =

`
<img
class="message-avatar"
src="${avatar}">

<div class="message-content">

<div class="message-header">

<div class="message-author">

${username}

</div>

<div class="message-time">

${time}

</div>

</div>

<div class="message-text">

${text}

</div>

</div>
`;

return wrapper;
}

function saveMessages(){

const allMessages = [];

document
.querySelectorAll(
".message-text"
)
.forEach(msg => {

allMessages.push(
msg.textContent
);

});

localStorage.setItem(

STORAGE.messages,

JSON.stringify(
allMessages
)

);
}

function loadMessages(){

const stored =

JSON.parse(

localStorage.getItem(
STORAGE.messages
)

||

"[]"

);

stored.forEach(text => {

messages.appendChild(
createMessage(text)
);

});

scrollBottom();
}

function scrollBottom(){

messages.scrollTop =
messages.scrollHeight;
}

function sendMessage(){

const text =
messageInput.value.trim();

if(!text) return;

const welcome =
document.querySelector(
".welcome-screen"
);

if(welcome){

welcome.remove();

}

messages.appendChild(
createMessage(text)
);

messageInput.value = "";

saveMessages();

scrollBottom();
}

sendBtn.addEventListener(
"click",
sendMessage
);

messageInput.addEventListener(
"keydown",
e => {

if(
e.key === "Enter"
){

sendMessage();

}

});

/* =====================================================
   CHANNELS
===================================================== */

document
.querySelectorAll(
".channel"
)
.forEach(channel => {

channel.addEventListener(
"click",
() => {

document
.querySelectorAll(
".channel"
)
.forEach(c => {

c.classList.remove(
"active"
);

});

channel.classList.add(
"active"
);

document
.querySelector(
".chat-title h3"
)
.textContent =

channel.textContent.trim();

});

});

/* =====================================================
   THEME
===================================================== */

function applyTheme(theme){

if(theme === "light"){

document.body.style.filter =
"invert(1) hue-rotate(180deg)";

}else{

document.body.style.filter =
"none";
}

localStorage.setItem(
STORAGE.theme,
theme
);

}

themeToggle.addEventListener(
"click",
() => {

const current =

localStorage.getItem(
STORAGE.theme
)

||

"dark";

applyTheme(

current === "dark"
?
"light"
:
"dark"

);

});

applyTheme(

localStorage.getItem(
STORAGE.theme
)

||

"dark"

);

/* =====================================================
   EMOJIS
===================================================== */

const emojis =

[
"😀","😂","🤣","😍",
"🔥","❤️","🚀",
"🎉","❄️","💎"
];

emojiPicker.innerHTML =

emojis.map(

emoji =>

`<button>${emoji}</button>`

).join("");

emojiBtn.addEventListener(
"click",
() => {

emojiPicker.style.display =

emojiPicker.style.display ===
"block"

?

"none"

:

"block";

});

emojiPicker
.querySelectorAll("button")
.forEach(btn => {

btn.addEventListener(
"click",
() => {

messageInput.value +=
btn.textContent;

messageInput.focus();

});

});

/* =====================================================
   STARTUP
===================================================== */

loadProfile();
loadMessages();

showToast(
"❄️ SnowChat Ready"
);

console.log(
"🚀 Fully Loaded"
);
