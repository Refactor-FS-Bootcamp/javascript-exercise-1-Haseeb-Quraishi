function createNote() {
    const Note = {}

    const date = new Date().toLocaleDateString();
    const title = document.querySelector('#note');
    const body = document.querySelector('#body');
    Note.noteTitle = title.value;
    Note.noteBody = body.value;
    Note.noteCreatedOn = date;

    localStorage.setItem("title", Note.noteTitle)
    localStorage.setItem("body", Note.noteBody)
    localStorage.setItem("createdon", Note.noteCreatedOn)
    console.log(Note);
}

console.log(createNote());