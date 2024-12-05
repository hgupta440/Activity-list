import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [];

  getNotes(): Note[] {
    return this.notes.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
  }
}
