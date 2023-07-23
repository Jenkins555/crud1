// NotesList.js

import React from 'react';
import './css/style.css'; // Подключаем общий файл стилей


/**
 * Компонент для отображения списка заметок.
 *
 * @param {Object} props - Свойства компонента.
 * @param {Array} props.notes - Список заметок.
 * @param {function} props.onDelete - Функция для удаления заметки.
 */
const NotesList = ({ notes, onDelete }) => {
  
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <p>{note.content}</p>
          <button  className="close-button" onClick={() => onDelete(note.id)}></button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
