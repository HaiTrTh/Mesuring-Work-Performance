import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import TaskForm from './components/TaskForm/taskForm';
// import TaskTable from './components/TaskTable/taskTable';
 import TimelineGenerator  from './components/TimelineGenerator/TimelineGenerator';
 import TaskManage from './components/TaskManage/taskManage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [tasks, setTasks] = useState([]);
  // const [editTask, setEditTask] = useState(null);
  // const [editIndex, setEditIndex] = useState(null);



  // const handleAddTask = (task) => {
  //   if (editIndex !== null) {
  //     const updatedTasks = [...tasks];
  //     updatedTasks[editIndex] = { ...task, number: tasks[editIndex].number };
  //     setTasks(updatedTasks);
  //     setEditIndex(null);
  //   } else {
  //     setTasks([
  //       ...tasks,
  //       { ...task, number: tasks.length + 1 },
  //     ]);
  //   }
  //   setEditTask(null);
  // };

  // const handleEditTask = (index) => {
  //   setEditTask(tasks[index]);
  //   setEditIndex(index);
  // };

  // const handleDeleteTask = (index) => {
  //   setTasks(tasks.filter((_, i) => i !== index));
  // };

  return (
    <Container>
      <h1 className="mt-5">Measuring Work Performance</h1>
        <TaskManage/>
        {/* <TimelineGenerator/> */}
    </Container>
  );
}

export default App;
