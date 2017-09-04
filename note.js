var notelist = [];

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
    saveNote(head, text);
    displayNotes();
}
function saveNote(head, text) {
    notelist.unshift({"title": head, "note": text});
    var head = document.getElementById("notehead");
    var body = document.getElementById("note");
    head.value = "";
    body.value = "";
}
function displayNotes() {
    var div = document.getElementById("notepage");
    while (div.hasChildNodes()) {
        div.removeChild(div.lastChild);
    }
    for (var notes in notelist){
        var text = document.createElement("textarea");
        text.name = "notes"
        text.cols = 45;
        text.rows = 5;
        text.className = "notelist";
        this.id = notes;
        if (notelist[notes].title != "") {
            text.value = notelist[notes].title.toUpperCase() + '\n' + notelist[notes].note;
        }
        else { text.value = notelist[notes].note;}
        div.appendChild(text);
    }
}
