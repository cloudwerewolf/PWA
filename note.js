var notelist = [];
//commented out lines to be used later
//function loadNote(noteid) {
//    alert(noteid);
//}
function remove(id) {
    var list = document.getElementsByClassName(id);
    for(var i = list.length - 1; 0 <= i; i--) {
        if(list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);    
        }
    }
}
function saveNote(head, text) {
    notelist.unshift({"title": head, "note": text});
}
function displayNotes() {
    var div = document.getElementById("notepage");
    remove('notelist'); 
    for (var notes in notelist){
        var text = document.createElement("textarea");
        text.name = "notes"
        text.cols = 45;
        text.rows = 5;
        text.className = "notelist";
        this.id = notes;    
        text.value = notelist[notes].title.toUpperCase() + '\n' + notelist[notes].note;
//        text.setAttribute('onclick', 'loadNote(id);')
        div.appendChild(text);
    }
}
