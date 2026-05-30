/* =====================================================
   SNOWCHAT
   PART 1
   CORE CHAT SYSTEM
===================================================== */

console.log("❄️ SnowChat Loaded");

/* =====================================================
   ELEMENTS
===================================================== */

const messagesContainer =
document.getElementById("messages");

const messageInput =
document.getElementById("messageInput");

const sendBtn =
document.getElementById("sendBtn");

const typingIndicator =
document.getElementById("typingIndicator");

/* =====================================================
   STORAGE
===================================================== */

const CHAT_STORAGE =
"snowchat_messages";

/* =====================================================
   TOAST SYSTEM
===================================================== */

function showToast(message,type="success"){

    const container =
    document.getElementById(
        "toastContainer"
    );

    const toast =
    document.createElement("div");

    toast.className =
    `toast ${type}`;

    toast.innerHTML = `
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(()=>{

        toast.style.opacity="0";

        setTimeout(()=>{

            toast.remove();

        },300);

    },3000);
}

/* =====================================================
   TIME
===================================================== */

function getCurrentTime(){

    return new Date()
    .toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });
}

/* =====================================================
   MESSAGE TEMPLATE
===================================================== */

function createMessage(
    author,
    text,
    avatar=
    "https://via.placeholder.com/40"
){

    const message =
    document.createElement("div");

    message.classList.add(
        "message",
        "message-enter"
    );

    message.innerHTML = `

        <img
            class="message-avatar"
            src="${avatar}"
            alt="avatar">

        <div class="message-content">

            <div class="message-header">

                <span class="message-author">

                    ${author}

                </span>

                <span class="message-time">

                    ${getCurrentTime()}

                </span>

            </div>

            <div class="message-text">

                ${text}

            </div>

        </div>

    `;

    return message;
}

/* =====================================================
   SAVE MESSAGES
===================================================== */

function saveMessages(){

    localStorage.setItem(
        CHAT_STORAGE,
        messagesContainer.innerHTML
    );
}

/* =====================================================
   LOAD MESSAGES
===================================================== */

function loadMessages(){

    const saved =
    localStorage.getItem(
        CHAT_STORAGE
    );

    if(saved){

        messagesContainer.innerHTML =
        saved;
    }
}

/* =====================================================
   SCROLL
===================================================== */

function scrollBottom(){

    messagesContainer.scrollTop =
    messagesContainer.scrollHeight;
}

/* =====================================================
   SEND MESSAGE
===================================================== */

function sendMessage(){

    const text =
    messageInput.value.trim();

    if(!text) return;

    const username =
    localStorage.getItem(
        "snowchat_name"
    ) || "SnowUser";

    const avatar =
    localStorage.getItem(
        "snowchat_avatar"
    ) ||
    "https://via.placeholder.com/40";

    const message =
    createMessage(
        username,
        text,
        avatar
    );

    messagesContainer.appendChild(
        message
    );

    saveMessages();

    scrollBottom();

    messageInput.value = "";

    typingIndicator.textContent =
    "";

    console.log(
        "📨 Message Sent:",
        text
    );
}

/* =====================================================
   BUTTON SEND
===================================================== */

sendBtn.addEventListener(
    "click",
    sendMessage
);

/* =====================================================
   ENTER SEND
===================================================== */

messageInput.addEventListener(
    "keydown",
    e => {

        if(
            e.key === "Enter"
        ){

            sendMessage();
        }
    }
);

/* =====================================================
   TYPING INDICATOR
===================================================== */

let typingTimeout;

messageInput.addEventListener(
    "input",
    () => {

        typingIndicator.innerHTML =
        `
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>

        You are typing...
        `;

        clearTimeout(
            typingTimeout
        );

        typingTimeout =
        setTimeout(()=>{

            typingIndicator.innerHTML =
            "";

        },1500);
    }
);

/* =====================================================
   MOCK SYSTEM MESSAGE
===================================================== */

setTimeout(()=>{

    const system =
    document.createElement("div");

    system.className =
    "system-message";

    system.textContent =
    "❄️ Welcome to SnowChat";

    messagesContainer.appendChild(
        system
    );

},1000);

/* =====================================================
   LOAD SAVED DATA
===================================================== */

window.addEventListener(
    "load",
    ()=>{

        loadMessages();

        scrollBottom();

        showToast(
            "❄️ SnowChat Ready!"
        );
    }
);
/* =====================================================
   PART 2
   PROFILE SYSTEM
===================================================== */

console.log("👤 Profile System Loaded");

/* =====================================================
   ELEMENTS
===================================================== */

const settingsBtn =
document.getElementById("settingsBtn");

const settingsModal =
document.getElementById("settingsModal");

const closeSettings =
document.getElementById("closeSettings");

const saveSettingsBtn =
document.getElementById("saveSettings");

const avatarInput =
document.getElementById("avatarInput");

const displayNameInput =
document.getElementById("displayName");

const bioInput =
document.getElementById("bio");

const customStatusInput =
document.getElementById("customStatus");

const profileName =
document.getElementById("profileName");

const userStatus =
document.getElementById("userStatus");

const profileAvatar =
document.getElementById("profileAvatar");

/* =====================================================
   STORAGE KEYS
===================================================== */

const USER_STORAGE = {

    name: "snowchat_name",

    bio: "snowchat_bio",

    status: "snowchat_status",

    avatar: "snowchat_avatar"

};

/* =====================================================
   OPEN SETTINGS
===================================================== */

settingsBtn.addEventListener(
    "click",
    () => {

        settingsModal.classList.add(
            "active"
        );

        document.body.style.overflow =
        "hidden";
    }
);

/* =====================================================
   CLOSE SETTINGS
===================================================== */

function closeSettingsModal(){

    settingsModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
    "hidden";
}

closeSettings.addEventListener(
    "click",
    closeSettingsModal
);

/* =====================================================
   CLOSE IF CLICK OUTSIDE
===================================================== */

settingsModal.addEventListener(
    "click",
    e => {

        if(
            e.target === settingsModal
        ){

            closeSettingsModal();
        }
    }
);

/* =====================================================
   LOAD PROFILE
===================================================== */

function loadProfile(){

    const savedName =
    localStorage.getItem(
        USER_STORAGE.name
    );

    const savedBio =
    localStorage.getItem(
        USER_STORAGE.bio
    );

    const savedStatus =
    localStorage.getItem(
        USER_STORAGE.status
    );

    const savedAvatar =
    localStorage.getItem(
        USER_STORAGE.avatar
    );

    if(savedName){

        profileName.textContent =
        savedName;

        displayNameInput.value =
        savedName;
    }

    if(savedBio){

        bioInput.value =
        savedBio;
    }

    if(savedStatus){

        customStatusInput.value =
        savedStatus;

        userStatus.textContent =
        savedStatus;
    }

    if(savedAvatar){

        profileAvatar.src =
        savedAvatar;
    }

    console.log(
        "✅ Profile Loaded"
    );
}

/* =====================================================
   SAVE PROFILE
===================================================== */

function saveProfile(){

    localStorage.setItem(
        USER_STORAGE.name,
        displayNameInput.value
    );

    localStorage.setItem(
        USER_STORAGE.bio,
        bioInput.value
    );

    localStorage.setItem(
        USER_STORAGE.status,
        customStatusInput.value
    );

    profileName.textContent =
    displayNameInput.value ||
    "SnowUser";

    userStatus.textContent =
    customStatusInput.value ||
    "🟢 Online";

    showToast(
        "✅ Profile Saved!"
    );

    console.log(
        "💾 Profile Saved"
    );
}

/* =====================================================
   SAVE BUTTON
===================================================== */

saveSettingsBtn.addEventListener(
    "click",
    () => {

        saveProfile();

        closeSettingsModal();
    }
);

/* =====================================================
   AVATAR UPLOAD
===================================================== */

avatarInput.addEventListener(
    "change",
    e => {

        const file =
        e.target.files[0];

        if(!file) return;

        if(
            !file.type.startsWith(
                "image/"
            )
        ){

            showToast(
                "❌ Select an image",
                "error"
            );

            return;
        }

        const reader =
        new FileReader();

        reader.onload = () => {

            profileAvatar.src =
            reader.result;

            localStorage.setItem(
                USER_STORAGE.avatar,
                reader.result
            );

            showToast(
                "🖼️ Avatar Updated!"
            );

            console.log(
                "📸 Avatar Saved"
            );
        };

        reader.readAsDataURL(
            file
        );
    }
);

/* =====================================================
   LIVE NAME UPDATE
===================================================== */

displayNameInput.addEventListener(
    "input",
    () => {

        profileName.textContent =
        displayNameInput.value ||
        "SnowUser";
    }
);

/* =====================================================
   LIVE STATUS UPDATE
===================================================== */

customStatusInput.addEventListener(
    "input",
    () => {

        userStatus.textContent =
        customStatusInput.value ||
        "🟢 Online";
    }
);

/* =====================================================
   PROFILE MODAL
===================================================== */

const profileModal =
document.getElementById(
    "profileModal"
);

const profileModalAvatar =
document.getElementById(
    "profileModalAvatar"
);

profileAvatar.addEventListener(
    "click",
    () => {

        profileModal.classList.add(
            "active"
        );

        profileModalAvatar.src =
        profileAvatar.src;
    }
);

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
    }
);

/* =====================================================
   DEFAULT USER
===================================================== */

if(
    !localStorage.getItem(
        USER_STORAGE.name
    )
){

    localStorage.setItem(
        USER_STORAGE.name,
        "SnowUser"
    );
}

/* =====================================================
   ACCOUNT STATS
===================================================== */

function generateStats(){

    if(
        !localStorage.getItem(
            "snowchat_joined"
        )
    ){

        localStorage.setItem(
            "snowchat_joined",
            Date.now()
        );
    }

    const joined =
    localStorage.getItem(
        "snowchat_joined"
    );

    console.log(
        "📊 Joined:",
        new Date(
            Number(joined)
        )
    );
}

generateStats();

/* =====================================================
   ACHIEVEMENTS
===================================================== */

function unlockAchievement(
    title
){

    const achievements =
    JSON.parse(
        localStorage.getItem(
            "snowchat_achievements"
        ) || "[]"
    );

    if(
        achievements.includes(
            title
        )
    ) return;

    achievements.push(
        title
    );

    localStorage.setItem(
        "snowchat_achievements",
        JSON.stringify(
            achievements
        )
    );

    showToast(
        `🏆 ${title}`
    );

    console.log(
        "🏆 Achievement:",
        title
    );
}

/* =====================================================
   FIRST VISIT BADGE
===================================================== */

if(
    !localStorage.getItem(
        "first_visit_badge"
    )
){

    unlockAchievement(
        "Welcome to SnowChat"
    );

    localStorage.setItem(
        "first_visit_badge",
        "true"
    );
}

/* =====================================================
   LOAD PROFILE ON START
===================================================== */

window.addEventListener(
    "load",
    () => {

        loadProfile();
    }
);
/* =====================================================
   PART 3
   THEME + UX SYSTEM
===================================================== */

console.log("🌙 Theme & UX System Loaded");

/* =====================================================
   THEME TOGGLE
===================================================== */

const themeToggle =
document.getElementById(
    "themeToggle"
);

const THEME_KEY =
"snowchat_theme";

function applyTheme(theme){

    if(theme === "light"){

        document.body.classList.add(
            "light"
        );

        themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

    }else{

        document.body.classList.remove(
            "light"
        );

        themeToggle.innerHTML =
        '<i class="fas fa-moon"></i>';
    }

    localStorage.setItem(
        THEME_KEY,
        theme
    );
}

themeToggle?.addEventListener(
    "click",
    () => {

        const isLight =
        document.body.classList.contains(
            "light"
        );

        applyTheme(
            isLight
            ? "dark"
            : "light"
        );

        showToast(
            isLight
            ? "🌙 Dark Mode Enabled"
            : "☀️ Light Mode Enabled"
        );
    }
);

/* =====================================================
   LOAD THEME
===================================================== */

window.addEventListener(
    "load",
    () => {

        const savedTheme =
        localStorage.getItem(
            THEME_KEY
        ) || "dark";

        applyTheme(
            savedTheme
        );
    }
);

/* =====================================================
   CHANNEL SWITCHING
===================================================== */

const channels =
document.querySelectorAll(
    ".channel"
);

const chatTitle =
document.querySelector(
    ".chat-title h3"
);

channels.forEach(channel => {

    channel.addEventListener(
        "click",
        () => {

            channels.forEach(c =>
                c.classList.remove(
                    "active"
                )
            );

            channel.classList.add(
                "active"
            );

            const channelName =
            channel.textContent.trim();

            if(chatTitle){

                chatTitle.textContent =
                channelName;
            }

            showToast(
                `📢 Switched to #${channelName}`
            );

            console.log(
                "Channel:",
                channelName
            );
        }
    );
});

/* =====================================================
   KEYBOARD SHORTCUTS
===================================================== */

document.addEventListener(
    "keydown",
    e => {

        /* ESC CLOSES MODALS */

        if(
            e.key === "Escape"
        ){

            settingsModal?.classList.remove(
                "active"
            );

            profileModal?.classList.remove(
                "active"
            );

            console.log(
                "ESC pressed"
            );
        }

        /* CTRL + K */

        if(
            e.ctrlKey &&
            e.key.toLowerCase() === "k"
        ){

            e.preventDefault();

            messageInput.focus();

            showToast(
                "⌨️ Quick Chat Focus"
            );
        }

        /* CTRL + D */

        if(
            e.ctrlKey &&
            e.key.toLowerCase() === "d"
        ){

            e.preventDefault();

            themeToggle.click();
        }
    }
);

/* =====================================================
   DESKTOP NOTIFICATIONS
===================================================== */

function requestNotificationPermission(){

    if(
        "Notification"
        in window
    ){

        if(
            Notification.permission
            !== "granted"
        ){

            Notification.requestPermission();
        }
    }
}

requestNotificationPermission();

function pushNotification(
    title,
    body
){

    if(
        "Notification"
        in window
    ){

        if(
            Notification.permission
            === "granted"
        ){

            new Notification(
                title,
                {
                    body
                }
            );
        }
    }
}

/* =====================================================
   INACTIVITY WARNING
===================================================== */

let inactiveTimer;

function resetActivity(){

    clearTimeout(
        inactiveTimer
    );

    inactiveTimer =
    setTimeout(() => {

        showToast(
            "⚠️ You've been inactive for 5 minutes",
            "warning"
        );

    },300000);
}

[
    "mousemove",
    "keydown",
    "click"
].forEach(event => {

    document.addEventListener(
        event,
        resetActivity
    );
});

resetActivity();

/* =====================================================
   SESSION START
===================================================== */

if(
    !sessionStorage.getItem(
        "snowchat_session"
    )
){

    sessionStorage.setItem(
        "snowchat_session",
        Date.now()
    );

    console.log(
        "🚀 New Session Started"
    );
}

/* =====================================================
   LAST LOGIN
===================================================== */

const LAST_LOGIN_KEY =
"snowchat_last_login";

const previousLogin =
localStorage.getItem(
    LAST_LOGIN_KEY
);

if(previousLogin){

    console.log(
        "Last Login:",
        new Date(
            Number(previousLogin)
        )
    );

    setTimeout(() => {

        showToast(
            `👋 Welcome Back!`
        );

    },1500);
}

localStorage.setItem(
    LAST_LOGIN_KEY,
    Date.now()
);

/* =====================================================
   SOUND SYSTEM
===================================================== */

let soundsEnabled =
JSON.parse(
    localStorage.getItem(
        "snowchat_sounds"
    ) || "false"
);

function playClick(){

    if(!soundsEnabled)
        return;

    const audio =
    new Audio(
        "https://actions.google.com/sounds/v1/cartoon/pop.ogg"
    );

    audio.volume = .2;

    audio.play();
}

document.querySelectorAll(
    "button"
).forEach(btn => {

    btn.addEventListener(
        "click",
        playClick
    );
});

/* =====================================================
   SOUND TOGGLE
===================================================== */

function toggleSounds(){

    soundsEnabled =
    !soundsEnabled;

    localStorage.setItem(
        "snowchat_sounds",
        JSON.stringify(
            soundsEnabled
        )
    );

    showToast(
        soundsEnabled
        ? "🔊 Sounds Enabled"
        : "🔇 Sounds Disabled"
    );
}

/* =====================================================
   RANDOM TIPS
===================================================== */

const tips = [

    "❄️ Tip: Upload a custom avatar in Settings",

    "⌨️ Ctrl + K focuses chat instantly",

    "🌙 Ctrl + D toggles dark mode",

    "🚀 SnowChat is just getting started",

    "💎 Customize your profile from Settings"
];

function randomTip(){

    const tip =
    tips[
        Math.floor(
            Math.random() *
            tips.length
        )
    ];

    showToast(
        tip
    );
}

setTimeout(
    randomTip,
    5000
);

/* =====================================================
   SERVER BUTTONS
===================================================== */

document
.querySelectorAll(
    ".server"
)
.forEach(server => {

    server.addEventListener(
        "click",
        () => {

            document
            .querySelectorAll(
                ".server"
            )
            .forEach(s =>
                s.classList.remove(
                    "active"
                )
            );

            server.classList.add(
                "active"
            );

            showToast(
                "❄️ Server Switched"
            );
        }
    );
});

/* =====================================================
   APP LOADED
===================================================== */

window.addEventListener(
    "load",
    () => {

        console.log(
            "🔥 SnowChat UX Ready"
        );

        showToast(
            "🚀 SnowChat Loaded Successfully"
        );
    }
);
/* =====================================================
   PART 3
   THEME + UX SYSTEM
===================================================== */

console.log("🌙 Theme & UX System Loaded");

/* =====================================================
   THEME TOGGLE
===================================================== */

const themeToggle =
document.getElementById(
    "themeToggle"
);

const THEME_KEY =
"snowchat_theme";

function applyTheme(theme){

    if(theme === "light"){

        document.body.classList.add(
            "light"
        );

        themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

    }else{

        document.body.classList.remove(
            "light"
        );

        themeToggle.innerHTML =
        '<i class="fas fa-moon"></i>';
    }

    localStorage.setItem(
        THEME_KEY,
        theme
    );
}

themeToggle?.addEventListener(
    "click",
    () => {

        const isLight =
        document.body.classList.contains(
            "light"
        );

        applyTheme(
            isLight
            ? "dark"
            : "light"
        );

        showToast(
            isLight
            ? "🌙 Dark Mode Enabled"
            : "☀️ Light Mode Enabled"
        );
    }
);

/* =====================================================
   LOAD THEME
===================================================== */

window.addEventListener(
    "load",
    () => {

        const savedTheme =
        localStorage.getItem(
            THEME_KEY
        ) || "dark";

        applyTheme(
            savedTheme
        );
    }
);

/* =====================================================
   CHANNEL SWITCHING
===================================================== */

const channels =
document.querySelectorAll(
    ".channel"
);

const chatTitle =
document.querySelector(
    ".chat-title h3"
);

channels.forEach(channel => {

    channel.addEventListener(
        "click",
        () => {

            channels.forEach(c =>
                c.classList.remove(
                    "active"
                )
            );

            channel.classList.add(
                "active"
            );

            const channelName =
            channel.textContent.trim();

            if(chatTitle){

                chatTitle.textContent =
                channelName;
            }

            showToast(
                `📢 Switched to #${channelName}`
            );

            console.log(
                "Channel:",
                channelName
            );
        }
    );
});

/* =====================================================
   KEYBOARD SHORTCUTS
===================================================== */

document.addEventListener(
    "keydown",
    e => {

        /* ESC CLOSES MODALS */

        if(
            e.key === "Escape"
        ){

            settingsModal?.classList.remove(
                "active"
            );

            profileModal?.classList.remove(
                "active"
            );

            console.log(
                "ESC pressed"
            );
        }

        /* CTRL + K */

        if(
            e.ctrlKey &&
            e.key.toLowerCase() === "k"
        ){

            e.preventDefault();

            messageInput.focus();

            showToast(
                "⌨️ Quick Chat Focus"
            );
        }

        /* CTRL + D */

        if(
            e.ctrlKey &&
            e.key.toLowerCase() === "d"
        ){

            e.preventDefault();

            themeToggle.click();
        }
    }
);

/* =====================================================
   DESKTOP NOTIFICATIONS
===================================================== */

function requestNotificationPermission(){

    if(
        "Notification"
        in window
    ){

        if(
            Notification.permission
            !== "granted"
        ){

            Notification.requestPermission();
        }
    }
}

requestNotificationPermission();

function pushNotification(
    title,
    body
){

    if(
        "Notification"
        in window
    ){

        if(
            Notification.permission
            === "granted"
        ){

            new Notification(
                title,
                {
                    body
                }
            );
        }
    }
}

/* =====================================================
   INACTIVITY WARNING
===================================================== */

let inactiveTimer;

function resetActivity(){

    clearTimeout(
        inactiveTimer
    );

    inactiveTimer =
    setTimeout(() => {

        showToast(
            "⚠️ You've been inactive for 5 minutes",
            "warning"
        );

    },300000);
}

[
    "mousemove",
    "keydown",
    "click"
].forEach(event => {

    document.addEventListener(
        event,
        resetActivity
    );
});

resetActivity();

/* =====================================================
   SESSION START
===================================================== */

if(
    !sessionStorage.getItem(
        "snowchat_session"
    )
){

    sessionStorage.setItem(
        "snowchat_session",
        Date.now()
    );

    console.log(
        "🚀 New Session Started"
    );
}

/* =====================================================
   LAST LOGIN
===================================================== */

const LAST_LOGIN_KEY =
"snowchat_last_login";

const previousLogin =
localStorage.getItem(
    LAST_LOGIN_KEY
);

if(previousLogin){

    console.log(
        "Last Login:",
        new Date(
            Number(previousLogin)
        )
    );

    setTimeout(() => {

        showToast(
            `👋 Welcome Back!`
        );

    },1500);
}

localStorage.setItem(
    LAST_LOGIN_KEY,
    Date.now()
);

/* =====================================================
   SOUND SYSTEM
===================================================== */

let soundsEnabled =
JSON.parse(
    localStorage.getItem(
        "snowchat_sounds"
    ) || "false"
);

function playClick(){

    if(!soundsEnabled)
        return;

    const audio =
    new Audio(
        "https://actions.google.com/sounds/v1/cartoon/pop.ogg"
    );

    audio.volume = .2;

    audio.play();
}

document.querySelectorAll(
    "button"
).forEach(btn => {

    btn.addEventListener(
        "click",
        playClick
    );
});

/* =====================================================
   SOUND TOGGLE
===================================================== */

function toggleSounds(){

    soundsEnabled =
    !soundsEnabled;

    localStorage.setItem(
        "snowchat_sounds",
        JSON.stringify(
            soundsEnabled
        )
    );

    showToast(
        soundsEnabled
        ? "🔊 Sounds Enabled"
        : "🔇 Sounds Disabled"
    );
}

/* =====================================================
   RANDOM TIPS
===================================================== */

const tips = [

    "❄️ Tip: Upload a custom avatar in Settings",

    "⌨️ Ctrl + K focuses chat instantly",

    "🌙 Ctrl + D toggles dark mode",

    "🚀 SnowChat is just getting started",

    "💎 Customize your profile from Settings"
];

function randomTip(){

    const tip =
    tips[
        Math.floor(
            Math.random() *
            tips.length
        )
    ];

    showToast(
        tip
    );
}

setTimeout(
    randomTip,
    5000
);

/* =====================================================
   SERVER BUTTONS
===================================================== */

document
.querySelectorAll(
    ".server"
)
.forEach(server => {

    server.addEventListener(
        "click",
        () => {

            document
            .querySelectorAll(
                ".server"
            )
            .forEach(s =>
                s.classList.remove(
                    "active"
                )
            );

            server.classList.add(
                "active"
            );

            showToast(
                "❄️ Server Switched"
            );
        }
    );
});

/* =====================================================
   APP LOADED
===================================================== */

window.addEventListener(
    "load",
    () => {

        console.log(
            "🔥 SnowChat UX Ready"
        );

        showToast(
            "🚀 SnowChat Loaded Successfully"
        );
    }
);
/* =====================================================
   PART 5
   INSANE MODE
===================================================== */

console.log("🚀 INSANE MODE ACTIVATED");

/* =====================================================
   XP SYSTEM
===================================================== */

const XP_KEY = "snowchat_xp";
const LEVEL_KEY = "snowchat_level";

let xp =
Number(
localStorage.getItem(XP_KEY)
) || 0;

let level =
Number(
localStorage.getItem(LEVEL_KEY)
) || 1;

function addXP(amount){

xp += amount;

const required =
level * 100;

if(xp >= required){

xp = 0;

level++;

localStorage.setItem(
LEVEL_KEY,
level
);

showToast(
`🎉 Level Up! Level ${level}`
);

launchConfetti();

}

localStorage.setItem(
XP_KEY,
xp
);

}

/* =====================================================
   MESSAGE XP
===================================================== */

document.addEventListener(
"click",
e => {

if(
e.target.id ===
"sendBtn"
){

addXP(10);

}

}
);

/* =====================================================
   USER STATS
===================================================== */

function getStats(){

const stats = {

messages:
document.querySelectorAll(
".message"
).length,

level,

xp

};

console.table(stats);

return stats;

}

/* =====================================================
   FRIEND REQUESTS
===================================================== */

const mockFriends = [

"Alex",
"Sarah",
"Ethan",
"Nova",
"Luna"

];

function randomFriendRequest(){

const user =

mockFriends[
Math.floor(
Math.random()
*
mockFriends.length
)
];

showToast(
`👥 Friend Request from ${user}`
);

}

setInterval(

randomFriendRequest,

120000

);

/* =====================================================
   VOICE CHANNEL EFFECTS
===================================================== */

document
.querySelectorAll(
".voice-channel"
)
.forEach(channel => {

channel.addEventListener(
"click",
() => {

channel.classList.toggle(
"connected"
);

if(
channel.classList.contains(
"connected"
)
){

showToast(
"🎙 Joined Voice Channel"
);

}else{

showToast(
"📞 Left Voice Channel"
);

}

}
);

});

/* =====================================================
   ACHIEVEMENTS
===================================================== */

function unlockAchievement(
title,
description=""
){

let achievements =
JSON.parse(
localStorage.getItem(
"snowchat_achievements"
)
||
"[]"
);

if(
achievements.includes(
title
)
)
return;

achievements.push(
title
);

localStorage.setItem(

"snowchat_achievements",

JSON.stringify(
achievements
)

);

showToast(
`🏆 ${title}`
);

launchConfetti();

console.log(
title,
description
);

}

/* =====================================================
   PARTICLE ENGINE
===================================================== */

function createParticles(){

const container =
document.createElement(
"div"
);

container.className =
"particles";

document.body.appendChild(
container
);

for(
let i = 0;
i < 60;
i++
){

const particle =
document.createElement(
"div"
);

particle.className =
"particle";

particle.style.width =
Math.random()*6+2+"px";

particle.style.height =
particle.style.width;

particle.style.left =
Math.random()*100+"%";

particle.style.animationDuration =
Math.random()*20+10+"s";

particle.style.opacity =
Math.random();

container.appendChild(
particle
);

}

}

createParticles();

/* =====================================================
   GRADIENT ORBS
===================================================== */

function createOrbs(){

const orb1 =
document.createElement("div");

orb1.className =
"orb orb1";

const orb2 =
document.createElement("div");

orb2.className =
"orb orb2";

const orb3 =
document.createElement("div");

orb3.className =
"orb orb3";

document.body.append(
orb1,
orb2,
orb3
);

}

createOrbs();

/* =====================================================
   SESSION TIMER
===================================================== */

const SESSION_START =
Date.now();

setInterval(() => {

const mins =

Math.floor(
(
Date.now()
-
SESSION_START
)
/
60000
);

console.log(
`⏱ Session: ${mins} min`
);

},60000);

/* =====================================================
   DAILY REWARD
===================================================== */

const DAILY_KEY =
"snowchat_daily_reward";

const today =
new Date()
.toDateString();

if(

localStorage.getItem(
DAILY_KEY
)

!==

today

){

localStorage.setItem(
DAILY_KEY,
today
);

showToast(
"🎁 Daily Reward +50 XP"
);

addXP(50);

}

/* =====================================================
   CONFETTI
===================================================== */

function launchConfetti(){

for(
let i = 0;
i < 80;
i++
){

const confetti =
document.createElement(
"div"
);

confetti.style.position =
"fixed";

confetti.style.width =
"8px";

confetti.style.height =
"8px";

confetti.style.left =
Math.random()*100+"vw";

confetti.style.top =
"-10px";

confetti.style.zIndex =
99999;

confetti.style.borderRadius =
"50%";

confetti.style.background =
`hsl(${Math.random()*360}
100%
60%)`;

confetti.style.transition =
"all 3s ease";

document.body.appendChild(
confetti
);

requestAnimationFrame(
() => {

confetti.style.transform =
`translateY(
${window.innerHeight+200}px
)
rotate(
${Math.random()*720}deg
)`;

confetti.style.opacity =
"0";

}
);

setTimeout(
() => {

confetti.remove();

},
3000
);

}

}

/* =====================================================
   LOGIN STREAK
===================================================== */

const STREAK_KEY =
"snowchat_streak";

let streak =
Number(
localStorage.getItem(
STREAK_KEY
)
) || 0;

streak++;

localStorage.setItem(
STREAK_KEY,
streak
);

console.log(
`🔥 Streak: ${streak}`
);

/* =====================================================
   PREMIUM PROFILE
===================================================== */

function enableNitro(){

profileAvatar.classList.add(
"nitro"
);

showToast(
"💎 SnowChat Premium Activated"
);

}

window.enableNitro =
enableNitro;

/* =====================================================
   USER BADGES
===================================================== */

function generateBadges(){

const badges = [];

if(level >= 5)
badges.push(
"🌟 Rising Star"
);

if(level >= 10)
badges.push(
"🚀 Veteran"
);

if(streak >= 30)
badges.push(
"🔥 Dedicated"
);

console.log(
"Badges:",
badges
);

return badges;

}

generateBadges();

/* =====================================================
   ACHIEVEMENTS
===================================================== */

if(level >= 5){

unlockAchievement(
"Rising Star"
);

}

if(level >= 10){

unlockAchievement(
"Veteran"
);

}

/* =====================================================
   ANNOUNCEMENT SYSTEM
===================================================== */

function announce(text){

const system =
document.createElement(
"div"
);

system.className =
"system-message";

system.innerHTML =
`📢 ${text}`;

messagesContainer.appendChild(
system
);

scrollBottom();

}

window.announce =
announce;

/* =====================================================
   RANDOM ANNOUNCEMENTS
===================================================== */

const announcements = [

"Welcome to SnowChat 🚀",

"New Features Coming Soon",

"Snowflake Technologies ❤️",

"Stay Frosty ❄️",

"Have Fun Chatting"

];

setInterval(() => {

announce(

announcements[
Math.floor(
Math.random()
*
announcements.length
)
]

);

},300000);

/* =====================================================
   APP COMPLETED
===================================================== */

setTimeout(() => {

showToast(
"🚀 SnowChat Ultimate Edition Loaded"
);

launchConfetti();

},2000);

console.log(
"❄️ SnowChat Ultimate Ready"
);
