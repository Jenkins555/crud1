
import React, { useState } from 'react';
import './css/style.css'; 

/**
 * Форма для добавления новой заметки.
 *
 * @param {Object} props - Свойства компонента.
 * @param {function} props.addNote - Функция для добавления новой заметки.
 */
const NoteForm = ({ addNote }) => {
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div>
        <label htmlFor="content">Новая заметка:</label>
        <input type="text" id="content" value={content} onChange={handleContentChange} />
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default NoteForm;
