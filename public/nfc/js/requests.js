
/**
 * Makes GET to get all the stickers of the user
 * @param user Firebase Auth user object
 */
function getStickers(user) {
    fetch(`https://europe-west3-sticktunnel.cloudfunctions.net/API/stickers/all?userId=${user.uid}`)
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                console.table(data.data);
                dipslayStickers(data.data);
            } else {
                console.log(data);
            }
        });
}


function createSticker(user) {
    const request = new XMLHttpRequest();
    request.open("post", "https://europe-west3-sticktunnel.cloudfunctions.net/API/sticker/registrate");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    const payload = JSON.stringify({
        uid: user.uid
    });

    request.onreadystatechange = function () {
        if (this.readyState == 4) {

            switch (JSON.parse(request.response).code) {
                case 201:
                    location.reload();

                default:
                    break
            }
        }
    };

    request.send(payload);
}
