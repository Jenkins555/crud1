import React, { useState, useEffect } from 'react';
import NotesList from './NotesList.js';
import NoteForm from './NoteForm.js';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  // Функция для загрузки списка заметок из бэкэнда
  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:7070/notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Ошибка при загрузке заметок:', error);
    }
  };

  // Выполняем загрузку списка заметок при монтировании компонента
  useEffect(() => {
    fetchNotes();
  }, []);

  // Функция для добавления новой заметки в список
  const addNote = async (content) => {
    try {
      const response = await fetch('http://localhost:7070/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        // Если запрос прошел успешно, обновляем список заметок
        fetchNotes();
      } else {
        console.error('Ошибка при добавлении заметки');
      }
    } catch (error) {
      console.error('Ошибка при добавлении заметки:', error);
    }
  };

  // Функция для удаления заметки из списка
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:7070/notes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Если запрос прошел успешно, обновляем список заметок
        fetchNotes();
      } else {
        console.error('Ошибка при удалении заметки');
      }
    } catch (error) {
      console.error('Ошибка при удалении заметки:', error);
    }
  };

  return (
    <div>
      <NotesList notes={notes} onDelete={deleteNote} />
      <NoteForm addNote={addNote} />
      
    </div>
  );
};

export default NotesApp;
