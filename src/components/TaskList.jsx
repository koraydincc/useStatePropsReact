import React, { useState } from 'react';

export default function TaskList({ item, setData }) {
  const [editTask, setEditTask] = useState(false);
  
  function handleDeleteClick() {
    setData((prev) => prev.filter((setItem) => setItem !== item));
  }

  function handleEditClick() {
    setEditTask(!editTask);
  }

  return (
    <div>
      {editTask ? (
        <div>
          {/* Burada düzenleme formu ya da düzenleme işlemleri olabilir */}
          
          <button onClick={handleEditClick}>Düzenlemeyi Bitir</button>
        </div>
      ) : (
        <li className='task-item'>
          <span>{item}</span>
          <button>Yapıldı</button>
          <button onClick={handleEditClick}>Düzenle</button>
          <button onClick={handleDeleteClick}>Sil</button>
        </li>
      )}
    </div>
  );
}
