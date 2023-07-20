import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskRead from "./components/TaskRead";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  function add(e) {
    setTask(e.target.value);
  }

  function taskAdd() {
    if (task.trim() !== "") {
      setData((prev) => [...prev, task]);
      setTask("");
    }
  }

  return (
    <div className="App">
      <h3>Görevler</h3>
      <input
        className="input"
        placeholder="Görev Ekleyin"
        type="text"
        onChange={add}
        value={task}
      />
      <button onClick={taskAdd} className="button-add">
        Ekle
      </button>
      <TaskRead setData={setData} data={data} />
    </div>
  );
}

export default App;
