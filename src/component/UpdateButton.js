import React, { useState } from 'react';

const UpdateButton = () => {
  const [updating, setUpdating] = useState(false);

  // Функция для обработки нажатия на кнопку "Обновить"
  const handleUpdate = async () => {
    
    try {
      
      setUpdating(true);

      // Выполняем GET-запрос для обновления списка заметок
      const response = await fetch('http://localhost:7070/notes');

      // Проверяем статус ответа
      if (response.ok) {
        console.log( "Обновить");
        setUpdating(false);
      } else {
       
        // Если получили ошибочный статус ответа, выбросим ошибку
        throw new Error('Ошибка при обновлении списка заметок');
      }
    } catch (error) {
        
      console.error('Ошибка при обновлении списка заметок:', error);
      setUpdating(false);
    }
  };

  return (
    <button onClick={handleUpdate} disabled={updating}>
      {updating ? 'Обновление...' : 'Обновить'}
    </button>
  );
};

export default UpdateButton;
