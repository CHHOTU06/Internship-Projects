function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => addNoteToDOM(note));
}

function addNote() {
    const input = document.getElementById('noteInput');
    const note = input.value.trim();
    if(note) {
        addNoteToDOM(note);
        saveNote(note);
        input.value = '';
    }
}

function addNoteToDOM(note) {
    const div = document.createElement('div');
    div.textContent = note;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.onclick = () => {
        div.remove();
        removeNote(note);
    }
    div.appendChild(deleteBtn);
    document.getElementById('notesList').appendChild(div);
}

function saveNote(note) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

function removeNote(note) {
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes = notes.filter(n => n !== note);
    localStorage.setItem('notes', JSON.stringify(notes));
}


document.addEventListener('DOMContentLoaded', loadNotes);