var notelist = [{"title": "hi", "note": "test"}, {"title": "test", "note": "test"}, {"title": "test", "note": "hi"}];
function displayNotes() {
    for (var notes in notelist){
        var div = document.getElementById("notepage");
        var text = document.createElement("textarea");
        text.cols = "45";
        text.rows = "5";
        text.id = "notelist";
        text.value = notelist[notes].title + '\n' + notelist[notes].note;
        div.appendChild(text);
    }
}