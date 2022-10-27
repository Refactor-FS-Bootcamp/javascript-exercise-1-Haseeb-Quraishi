var saveNote = document.getElementById("save");
saveNote.addEventListener("click", function (e) {
  let date = new Date().toLocaleDateString();
  let title = document.querySelector("#note");
  let body = document.querySelector("#body");

  if (title.value == "") {
    return alert("Title must be valid")
  }

  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  let myNoteObj = {
    title: title.value,
    body: body.value,
    date: date,
  };

  notesObj.push(myNoteObj);
  //   notesObj.push(body.value);
  //   notesObj.push(date);

  localStorage.setItem("note", JSON.stringify(notesObj));
  title.value = "";
  body.value = "";

  fetchNotes();
});

function fetchNotes() {
  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  let card = "";
  notesObj.forEach((element, index) => {
    card += `
    <div class="col-sm-4 mb-2">
        <div class="card bg-light note">
        <div class="card-body">
            <h5 class="card-title">${(index + 1, element.title)} 
            <span><button id="${index}" onclick="editNote(this.id)" class="btn btn-sm btn-warning">edit</button>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-sm ml-1 btn-danger">delete</button></span></h5>
            <p class="card-text">${element.body}</p>
            <p id="date-align">${element.date}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
        </div>
    </div>
        `;
    let noteElement = document.getElementById("notes");
    if (notesObj.length != 0) {
      noteElement.innerHTML = card;
    } else {
      noteElement.innerHTML = `<h3>No notes available</h3>`;
    }
  });
}

function deleteNote(id) {
  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  notesObj.splice(id, 1);
  localStorage.setItem("note", JSON.stringify(notesObj));
  fetchNotes();
}

function editNote(index) {
  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  notesObj.findIndex((element, index) => {
    console.log(notesObj[index].title);
    title.value = notesObj[index].title; //element.title;
    body.value = element.body;
  });
  notesObj.splice(index, 1);
  localStorage.setItem("note", JSON.stringify(notesObj));
  fetchNotes();
}
fetchNotes();
