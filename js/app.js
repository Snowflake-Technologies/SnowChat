<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>SnowChat</title>

<link rel="stylesheet" href="css/style.css">

<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

</head>

<body>

<!-- PARTICLES -->

<div id="particles"></div>

<!-- TOASTS -->

<div id="toastContainer"></div>

<!-- SETTINGS MODAL -->

<div class="settings-modal" id="settingsModal">

    <div class="settings-card">

        <div class="settings-header">

            <h2>User Settings</h2>

            <button id="closeSettings">

                <i class="fas fa-times"></i>

            </button>

        </div>

        <div class="settings-body">

            <div class="avatar-section">

                <img
                id="avatarPreview"
                src="https://cdn.discordapp.com/embed/avatars/0.png">

                <input
                type="file"
                id="avatarInput"
                accept="image/*">

            </div>

            <div class="setting-group">

                <label>Display Name</label>

                <input
                id="displayName"
                type="text"
                placeholder="SnowUser">

            </div>

            <div class="setting-group">

                <label>Bio</label>

                <textarea
                id="bio"
                rows="4"
                placeholder="Tell everyone about yourself..."></textarea>

            </div>

            <div class="setting-group">

                <label>Custom Status</label>

                <input
                id="customStatus"
                type="text"
                placeholder="❄️ Chilling">

            </div>

            <button id="saveSettings">

                Save Changes

            </button>

        </div>

    </div>

</div>

<!-- PROFILE MODAL -->

<div class="profile-modal" id="profileModal">

    <div class="profile-card">

        <div class="profile-banner"></div>

        <div class="profile-content">

            <img
            id="profileModalAvatar"
            src="https://cdn.discordapp.com/embed/avatars/0.png">

            <h2 id="modalName">

                SnowUser

            </h2>

            <p id="modalBio">

                Welcome to SnowChat

            </p>

            <div class="profile-badges">

                <span>❄️ Founder</span>
                <span>🚀 Early User</span>

            </div>

        </div>

    </div>

</div>

<!-- MAIN APP -->

<div class="app">

    <!-- SERVER BAR -->

    <aside class="servers">

        <div class="server-logo">

            ❄️

        </div>

        <div class="server active">

            <i class="fas fa-comments"></i>

        </div>

        <div class="server">

            <i class="fas fa-gamepad"></i>

        </div>

        <div class="server">

            <i class="fas fa-code"></i>

        </div>

        <div class="server">

            <i class="fas fa-plus"></i>

        </div>

    </aside>

    <!-- CHANNELS -->

    <aside class="channels">

        <div class="channel-header">

            SnowChat

        </div>

        <div class="channel-category">

            TEXT CHANNELS

        </div>

        <div class="channel active">

            <i class="fas fa-hashtag"></i>

            general

        </div>

        <div class="channel">

            <i class="fas fa-hashtag"></i>

            gaming

        </div>

        <div class="channel">

            <i class="fas fa-hashtag"></i>

            coding

        </div>

        <div class="channel">

            <i class="fas fa-hashtag"></i>

            memes

        </div>

        <div class="channel-category">

            VOICE CHANNELS

        </div>

        <div class="voice-channel">

            <i class="fas fa-volume-up"></i>

            General VC

        </div>

        <div class="voice-channel">

            <i class="fas fa-volume-up"></i>

            Chill Zone

        </div>

        <!-- USER BAR -->

        <div class="user-panel">

            <img
            id="profileAvatar"
            src="https://cdn.discordapp.com/embed/avatars/0.png">

            <div>

                <h4 id="profileName">

                    SnowUser

                </h4>

                <span id="userStatus">

                    🟢 Online

                </span>

            </div>

            <button id="settingsBtn">

                <i class="fas fa-cog"></i>

            </button>

        </div>

    </aside>

    <!-- CHAT -->

    <main class="chat">

        <header class="chat-header">

            <div class="chat-title">

                <i class="fas fa-hashtag"></i>

                <h3>general</h3>

            </div>

            <div class="chat-actions">

                <button>

                    <i class="fas fa-bell"></i>

                </button>

                <button>

                    <i class="fas fa-user-friends"></i>

                </button>

                <button id="themeToggle">

                    <i class="fas fa-moon"></i>

                </button>

            </div>

        </header>

        <div class="messages" id="messages">

            <div class="welcome-screen">

                <h1>

                    ❄️ Welcome to SnowChat

                </h1>

                <p>

                    Start chatting with your community.

                </p>

            </div>

        </div>

        <div id="typingIndicator"></div>

        <div class="message-box">

            <button id="emojiBtn">

                😀
            </button>

            <input
            id="messageInput"
            type="text"
            placeholder="Message #general">

            <button id="sendBtn">

                <i class="fas fa-paper-plane"></i>

            </button>

        </div>

    </main>

    <!-- MEMBERS -->

    <aside class="members">

        <div class="members-header">

            MEMBERS — 5

        </div>

        <div class="member">

            <img
            src="https://cdn.discordapp.com/embed/avatars/1.png">

            <span>

                SnowBot

            </span>

            <div class="status online"></div>

        </div>

        <div class="member">

            <img
            src="https://cdn.discordapp.com/embed/avatars/2.png">

            <span>

                Luna

            </span>

            <div class="status online"></div>

        </div>

        <div class="member">

            <img
            src="https://cdn.discordapp.com/embed/avatars/3.png">

            <span>

                Alex

            </span>

            <div class="status idle"></div>

        </div>

        <div class="member">

            <img
            src="https://cdn.discordapp.com/embed/avatars/4.png">

            <span>

                Nova

            </span>

            <div class="status dnd"></div>

        </div>

    </aside>

</div>

<!-- CONTEXT MENU -->

<div id="contextMenu" class="context-menu">

    <div id="replyMessage">

        ↩️ Reply

    </div>

    <div id="editMessage">

        ✏️ Edit

    </div>

    <div id="deleteMessage">

        🗑 Delete

    </div>

</div>

<!-- EMOJI PICKER -->

<div id="emojiPicker" class="emoji-picker"></div>

<script src="js/app.js"></script>

</body>
</html>
