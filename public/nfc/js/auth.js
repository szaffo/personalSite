// Google login

const MAIN_PAGE = "main.html";
const LOGIN_PAGE = "index.html";
const PUBLIC_PATHS = ["/nfc/index.html"];

document.addEventListener("DOMContentLoaded", function() {
    
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            displayUserData(firebase.auth().currentUser);

            handlePageTasks(user);

        } else {
            const path  = location.pathname; // /index.html
            if (!PUBLIC_PATHS.includes(path)) location.href = LOGIN_PAGE;
        }
    });
    
    // Attach login listeners
    const gBtn = document.getElementById("google-login-btn");
    if (gBtn) { gBtn.addEventListener("click", function() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {    
            location.href = MAIN_PAGE;
        }).catch(function (error) {
        });
    })}

    const fBtn = document.getElementById("facebook-login-btn");
    if (fBtn) {
        fBtn.addEventListener("click", function () {
            const provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) {
                location.href = MAIN_PAGE;
            }).catch(function (error) {
            });
        })
    }


    attachListenersToActions();
   
});  

function displayUserData(user) {    
    holders = Array.from(document.getElementsByClassName("name-holder"));

    holders.forEach(holder => {
        const template = document.getElementById("name-holder-template").content.cloneNode(true);
        template.querySelector("#avatar-holder").setAttribute("src", user.photoURL);
        template.querySelector(".author").innerText = user.displayName;

        holder.innerText = '';
        holder.appendChild(template);
});

    attachListenersToActions();
}

function handlePageTasks(user) {
    switch (location.pathname) {
        case "/nfc/main.html":
            getStickers(user);
            break;
    
        default:
            break;
    }
}

function attachListenersToActions() {
    // Attach logout
    const loBtn = document.getElementById("logout-btn");
    if (loBtn) loBtn.addEventListener("click", function () {
        firebase.auth().signOut();
    })

    // Attach sticker create
    const newSticker = document.getElementById("new-sticker-btn");
    if (newSticker) newSticker.addEventListener('click', function () {
        
        new NewStickerModal();
        
        
        // createSticker(firebase.auth().currentUser);
    })
}