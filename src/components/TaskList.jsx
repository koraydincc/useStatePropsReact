import React from 'react';

export default function TaskList({ item,setData }) {
  return (
    <li className='task-item'>
      <span>{item}</span>
      <button>Yapıldı</button>
      <button>Düzenle</button>
      <button onClick={() => {
         setData((prev)=> {
            return prev.filter((setItem)=> setItem != item )
         })
      }}>Sil</button>
    </li>
  );
}
