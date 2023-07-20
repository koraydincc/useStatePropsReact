import React from 'react';
import TaskList from './TaskList';

export default function TaskRead({ data, setData }) {
  return (
    <div>
      <h4 className='task-title'>Eklenen Görevler</h4>
      <ul >
 
           {data.map((item, index) => (
             <TaskList key={index} item={item} setData={setData} />
           ))}
        
      </ul>
    </div>
  );
}
