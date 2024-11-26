// import React, { useState } from 'react';
// import { Container, Table, Button, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [taskName, setTaskName] = useState('');
//   const [importance, setImportance] = useState(1);
//   const [emergency, setEmergency] = useState(1);
//   const [difficulty, setDifficulty] = useState({
//     done: false,
//     knowledge: false,
//     acquaintance: false
//   });

//   const [tasks, setTasks] = useState([]);
//   const [error, setError] = useState('');
//   const [editIndex, setEditIndex] = useState(null);  // Track which task is being edited

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if(!taskName.trim()){
//       setError('Task Name is Required');
//       return;
//     }

//     // if(![difficulty.done, difficulty.knowledge, difficulty.acquaintance].includes(true)){
//     //   setError('At lease one Difficult Level must be selected');
//     //   return;
//     // }
    
//     setError(''); // clear any previous error
   
      

//     setTasks([...tasks, {
//       number: tasks.length + 1,
//       name: taskName,
//       importance,
//       emergency,
//       difficulty
//     }]);
//     console.log('Task added: ', {taskName, importance, emergency, difficulty});
//     // alert('Task added successfully');

//     setTaskName('');
//     setImportance(1);
//     setEmergency(1);
//     setDifficulty({ done: false, knowledge: false, acquaintance: false });
//   };

  //   const handleEditTask = (index) => {
  //     const taskToEdit = tasks[index];
  //     setTaskName(taskToEdit.name);
  //     setImportance(taskToEdit.importance);
  //     setEmergency(taskToEdit.emergency);
  //     setDifficulty(taskToEdit.difficulty);
  //     setEditIndex(index);
  //   };

  //   const handleSaveEditTask = () => {
  //     const updatedTask = {
  //       number: tasks[editIndex].number,
  //       name: taskName,
  //       importance: importance,
  //       emergency: emergency,
  //       difficulty: difficulty
  //     };

  //     const updatedTasks = [...tasks];
  //     updatedTasks[editIndex] = updatedTask;
  //     setTasks(updatedTasks);
  //     resetForm(); // Reset form after editing task
  //     setEditIndex(null); // Clear edit mode
  //   }


//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index); // Remove task by index
//     setTasks(updatedTasks);
//   };

//   const resetForm = () => {
//     setTaskName('');
//     setImportance('');
//     setEmergency('');
//     setDifficulty({
//       done: false,
//       knowledge: false,
//       acquaintance: false
//     });
//     setError('');
//   };


//   return (
//     <Container>
//       <h1 className="mt-5">Measuring Work Performance</h1>
//       <Form className="my-4" >
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <Form.Group>
//           <Form.Label>Task Name</Form.Label>
//           <Form.Control 
//             type="text" 
//             value={taskName} 
//             onChange={(e) => setTaskName(e.target.value)} 
//             required
//           />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Importance</Form.Label>
//           <Form.Control as="select" value={importance} onChange={(e) => setImportance(e.target.value)}>
//             {[1, 2, 3, 4, 5].map(i => <option key={i} value={i}>{i} Star</option>)}
//           </Form.Control>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Emergency Level</Form.Label>
//           <Form.Control as="select" value={emergency} onChange={(e) => setEmergency(e.target.value)}>
//             {[1, 2, 3, 4, 5].map(i => <option key={i} value={i}>{i} Star</option>)}
//           </Form.Control>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Difficulty Level</Form.Label>
//           <div>
//             <label>
//               <input 
//                 type="checkbox" 
//                 checked={difficulty.done} 
//                 onChange={() => setDifficulty({ ...difficulty, done: !difficulty.done })} 
//               /> Done
//             </label>
//             <label>
//               <input 
//                 type="checkbox" 
//                 checked={difficulty.knowledge} 
//                 onChange={() => setDifficulty({ ...difficulty, knowledge: !difficulty.knowledge })} 
//               /> Know the Knowledge
//             </label>
//             <label>
//               <input 
//                 type="checkbox" 
//                 checked={difficulty.acquaintance} 
//                 onChange={() => setDifficulty({ ...difficulty, acquaintance: !difficulty.acquaintance })} 
//               /> Know Someone Who Knows
//             </label>
//           </div>
//         </Form.Group>
// {/* 
//          <Button onClick={handleSubmit} variant="primary">
//             Save Task
//         </Button> */}
//         <Button onClick={editIndex !== null ? handleSaveEditTask : handleSubmit} variant="primary">
//           {editIndex !== null ? 'Save Task' : 'Add Task'}
//         </Button>
       
//       </Form>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Number</th>
//             <th>Name</th>
//             <th>Importance</th>
//             <th>Emergency Level</th>
//             <th>Difficulty Level</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task,index) => (
//             <tr key={task.number}>
//               <td>{task.number}</td>
//               <td>{task.name}</td>
//               <td>{task.importance} Stars</td>
//               <td>{task.emergency} Stars</td>
//               <td>
//                 {task.difficulty.done ? 'Done ' : ''} 
//                 {task.difficulty.knowledge ? 'Knowledgeable ' : ''}
//                 {task.difficulty.acquaintance ? 'Knows Someone ' : ''}
//               </td>
//               <td>
//                 <Button variant="warning" onClick={() => handleEditTask(index)}>Edit</Button>
//                 <Button variant="danger" onClick={() => handleDeleteTask(index)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// }

// export default App;
