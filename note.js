var notelist = [];
function saveNote(title, text) {
    notelist.push({"title": title, "note": text});
}
function displayNotes() {
    var div = document.getElementById("notepage");
//    var del = document.getElementsByName("notes");
//    div.removeChild(del);
    for (var notes in notelist){
        var text = document.createElement("textarea");
        text.name = "notes"
        text.cols = 45;
        text.rows = 5;
        text.id = "notelist";
        text.value = notelist[notes].title + '\n' + notelist[notes].note;
        div.appendChild(text);
    }
}