console.log("main.js added");
showNotes();
function addNote() {
    let text = document.getElementById('noteText').value;

    let notes = localStorage.getItem('notes');
    let notesList=[];
    if(notes!=null){
        notesList = JSON.parse(notes);
    }
    notesList.push(text);
    localStorage.setItem('notes',JSON.stringify(notesList));
    document.getElementById('noteText').value = '';
    showNotes();
}

function showNotes() {
    let notes = localStorage.getItem('notes');
    let notesList=[];
    if(notes!=null){
        notesList = JSON.parse(notes);
    }
    let cardList = '';
    notesList.forEach((text,index) => {
        cardList += `
            <div class="card text-dark bg-light mb-3 mx-3 my-3" style="max-width: 18rem;">
                <div class="card-header">Header ${index}</div>
                <div class="card-body">
                    <p class="card-text">${text}</p>
                </div>
                <button href="#" class="btn btn-primary" onclick="deleteNote(${index})">Delete</button>
            </div>
        `;
    })
    document.getElementById('notesList').innerHTML = cardList;
}

function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    let notesList=[];
    if(notes!=null){
        notesList = JSON.parse(notes);
    }
    notesList.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesList));
    showNotes();
}
