let noteTitleBox = document.getElementsByClassName('note-title-box')[0];
let noteTextBox = document.getElementsByClassName('note-text-box')[0];
let submitButton = document.getElementsByClassName('submit-button')[0];

let noteHeading = document.getElementsByClassName('note-heading')[0];
let noteContent = document.getElementsByClassName('note-content')[0];
let deleteNote = document.getElementsByClassName('delete-note')[0];

let title;
let note;
let noteCount;


/* local storage initial setup */


if (localStorage.length === 0) {
    localStorage.setItem("noteCount", "0");
}

noteCount = Number(localStorage.getItem(noteCount));

showNote();

submitButton.addEventListener('click', function () {
    title = noteTitleBox.value;
    note = noteTextBox.value;
    localStorage.setItem("title", title);
    localStorage.setItem("note", note);
    makeNoteBox();
});

deleteNote.addEventListener('click', function () {
    localStorage.clear();
    showNote();
})


function makeNoteBox() {

    addNote();
}

function addNote() {
    noteHeading.innerHTML = localStorage.getItem("title");
    noteContent.innerHTML = localStorage.getItem("note");
}

function showNote() {
    noteHeading.innerHTML = localStorage.getItem("title");
    noteContent.innerHTML = localStorage.getItem("note");
}