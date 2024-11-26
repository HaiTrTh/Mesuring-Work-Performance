
import React, { useState } from 'react';
import TaskForm from '../TaskForm/taskForm';
import TaskTable from '../TaskTable/taskTable';
import  TimelineGenerator from '../TimelineGenerator/TimelineGenerator';
import { Container } from 'react-bootstrap';

const TaskManage = () => {
  const [tasks, setTasks] = useState([]); // Stores all tasks
  const [editTask, setEditTask] = useState(null); // Current task being edited
  const [editIndex, setEditIndex] = useState(null); // Index of the task being edited
  const [errorDelete, setErrorDelete] = useState('');

  // const [onGenerate, setOn]

  // Add or Update a Task
  const handleAddOrUpdateTask = (task) => {
    if (editIndex !== null) {
      // If editing, update the task at the specified index
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = {...task, number: tasks[editIndex].number};
      setTasks(updatedTasks);
      setEditIndex(null); // Clear edit index after updating
      setErrorDelete('');
    } 
    else {
      // Add a new task
      setTasks([...tasks, { ...task, number: tasks.length + 1 }]);
    }
      setEditTask(null); // Clear edit task
  };
 
  const handleEditTask = (index) =>{
      setEditTask(tasks[index]);
      setEditIndex(index);
  }

  const handleDeleteTask = (index) => {
    if(editIndex!==null){
      setErrorDelete("You are editting, update first before deleting.");
       console.log(errorDelete);
      return;
    }
    else{
      const confirmDelete = window.confirm("Do you really want to delete this task?");
      if (confirmDelete) {
          setTasks(tasks.filter((_,i) => i!== index));
          setErrorDelete(''); // Clear error after task is deleted
          console.log(errorDelete);
      }
      else{
        console.log("Task deletion canceled");
      }
  }
}
  
  return (
    <Container>
      <TaskForm addAndUpdate={handleAddOrUpdateTask} editTask={editTask} errorDelete={errorDelete} setErrorDelete={setErrorDelete}/>
      <TaskTable tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask}></TaskTable>
      <TimelineGenerator tasks={tasks}  ></TimelineGenerator>
    </Container>
  );
};

export default TaskManage;
