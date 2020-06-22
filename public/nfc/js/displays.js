/**
 * Adds the stickers to the DOM
 * @param data {[{name: String, redirectURL: URL, stickerId: String, userId: String}]}
 */
function dipslayStickers(data) {
    const mainContainer = clearMainContainer();

    const table = document.querySelector('#table').content.cloneNode(true);
    mainContainer.appendChild(table);

    const tbody = document.getElementById("table-body");//table.querySelector('tbody');

    mainContainer.appendChild(table);

    const tableBody = table.childNodes[1];
    const template = document.querySelector('#table-row');

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td><p>Nincs még linked</p></td></tr>`;
        return;
    }

    data.forEach(sticker => {
        let clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll("td");
        td[0].firstChild.innerText = sticker.name;
        td[0].firstChild.href = `https://europe-west3-sticktunnel.cloudfunctions.net/API/sticker/${sticker.stickerId}`;

        clone.querySelector('.edit.button').addEventListener('click', function () {
            new EditModal(this).show();
        }.bind(sticker));

        clone.querySelector('.copy.button').addEventListener('click', function () {
            navigator.clipboard.writeText(this.redirectURL).then(() => {
                showInfo('Link vágólapra másolva!', 'info');
            }); // TODO .then( ) jelezni a sikert
        }.bind(sticker));

        tbody.appendChild(clone);
    });

    // :)
}

function clearMainContainer() {
    const mc = document.getElementById("main-container");
    mc.innerText = '';
    return mc;
}

