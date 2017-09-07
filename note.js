var notelist = [];

function displayNotes() {
    var retnotelist = localStorage.getItem('Notelist');
    if (retnotelist !== null) {
        retnotelist = JSON.parse(retnotelist);
    }
    var div = document.getElementById("notepage");
    for (var notes in retnotelist){
        var text = document.createElement("textarea");
        text.name = "notes"
        text.cols = 45;
        text.rows = 5;
        text.className = "notelist";
        this.id = notes;
        if (retnotelist[notes].title != "") {
            text.value = retnotelist[notes].title.toUpperCase() + '\n' + retnotelist[notes].note;
        }
        else { text.value = retnotelist[notes].note;}
        div.appendChild(text);
    }
}
function loadOld() {
    displayNotes();
}
function noteListen() {
    document.getElementById('note').addEventListener("keydown", function (event) {
    if (event.keyCode == 13 && event.ctrlKey) {
        document.getElementById('save').click();
        event.preventDefault();
    }
    });
    document.getElementById('notehead').addEventListener("keydown", function (event) {
    if (event.keyCode == 13 && event.ctrlKey) {
        document.getElementById('save').click();
        event.preventDefault();
    }
    });
}
function addNote(head, text) {
    if (head !== "" || text !== "") {
        saveNote(head, text);
        clearNotes();
    }
}
function saveNote(head, text) {
    notelist.unshift({"title": head, "note": text});
    localStorage.setItem('Notelist', JSON.stringify(notelist));
    var head = document.getElementById("notehead");
    var body = document.getElementById("note");
    head.value = "";
    body.value = "";
}
function clearWall() {
    var div = document.getElementById("notepage");
    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }
}
function clearNotes() {
    clearWall();
    displayNotes();
}
function deleteNotes() {
    localStorage.removeItem('Notelist');
    notelist = [];
    localStorage.setItem('Notelist', JSON.stringify(notelist));
    clearWall();
}
function regoSW() {
    if('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('/sw.js');
    }
}