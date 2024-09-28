//Purpose: Allows the user to select which note (string) they want to tune.
import React from 'react';

interface NoteSelectorProps {
  targetNote: string;
  setTargetNote: (note: string) => void;
}

const notes = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];

const NoteSelector: React.FC<NoteSelectorProps> = ({ targetNote, setTargetNote }) => {
  return (
    <div className="note-selector">
      {notes.map((note) => (
        <button
          key={note}
          onClick={() => setTargetNote(note)}
          className={note === targetNote ? 'active' : ''}
        >
          {note}
        </button>
      ))}
    </div>
  );
};

export default NoteSelector;
