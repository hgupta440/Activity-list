import { Component } from '@angular/core';
import { NoteService } from './services/note.service';
import { Note } from './models/note.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule,FormsModule],
})
export class AppComponent {
  newNote = {
    user: '',
    type: 'Message',
    content: '',
  };

  constructor(private noteService: NoteService) {}

  get notes(): Note[] {
    return this.noteService.getNotes();
  }

  addNote(): void {
    if (this.newNote.content.trim() && this.newNote.user.trim()) {
      const note: Note = {
        id: Date.now(),
        user: this.newNote.user,
        type: this.newNote.type as Note['type'],
        content: this.newNote.content,
        timestamp: new Date(),
      };
      this.noteService.addNote(note);
      this.newNote.content = '';
      this.newNote.user = '';
      this.newNote.type = 'Message';
    }
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id);
  }
}
