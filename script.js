const konjunktivII = "konjunktivii.html";
const konjunktivIIName = "B1 - Konjunktiv II";
const adjektivendungen = "adjektivendungen.html";
const adjektivendungenName = "B1 - Adjektivendungen";
const praeteritum = "präteritum.html";
const praeteritumName = "B1 - Präteritum";

const links = [[konjunktivII, konjunktivIIName], [adjektivendungen, adjektivendungenName], [praeteritum, praeteritumName]];

const list = document.getElementById('new-links');

function listNewLinks() {
    for (let link of links) {
        let newListItem = document.createElement('li');

        let newLink = document.createElement('a');
        newLink.href = link[0];
        newLink.innerText = link[1];

        newListItem.appendChild(newLink);

        list.appendChild(newListItem);
    }
}

listNewLinks();


