import { Component } from '@angular/core';

export class Note {
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  allNotes: Note[] = [
    {
      title: 'Snippet 1',
      body: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
    },
    {
      title: 'Snippet 2',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      title: 'Snippet 3',
      body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  ]

  note = new Note();

  activeNote: Note

  editing = false;

  createNote() {
    this.allNotes.push(this.note);
    this.note = new Note();
  }

  editNote(note) {
    this.editing = true;
  }

  saveNote(note) {
    this.editing = false;
  }

  deleteNote(note, i) {
    this.allNotes.splice(i,1);
  }
}
