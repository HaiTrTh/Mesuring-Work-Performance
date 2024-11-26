
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskForm = ({ addAndUpdate, editTask, errorDelete, setErrorDelete }) => {
  const [taskName, setTaskName] = useState('');
  const [importance, setImportance] = useState(1);
  const [emergency, setEmergency] = useState(1);
  const [difficulty, setDifficulty] = useState({
    done: false,
    knowledge: false,
    acquaintance: false,
  });
  const [estimateDuration, setEstimateDuration] = useState(25);
  const [error, setError] = useState('');

  useEffect(() => {
    if(errorDelete){
      setError(errorDelete); // Update internal error state when parent error state changes
    }
  }, [errorDelete]); // Only update internal error state when the error prop changes

  useEffect(() =>{
     if(editTask){
      setTaskName(editTask.name);
      setImportance(editTask.importance);
      setEmergency(editTask.emergency);
      setDifficulty(editTask.difficulty);
      setEstimateDuration(editTask.estimateDuration || 25)
    }
  }, [editTask])

  const handleSubmit = (e) => {
     e.preventDefault();
    if (!taskName.trim()) {
      setError('Task Name is required');
      return;   
    }
    if(estimateDuration <=0 ){
      setError('Estimate durationn must be greater than 0.')
      return;
    }
    // console.log(error)
    const task = { name: taskName, importance, emergency, difficulty, estimateDuration };
    addAndUpdate(task); // Send the task to TaskManage
    resetForm(); // Clear the form
    setError('');
  };

  const resetForm = () => {
    setTaskName('');
    setImportance(1);
    setEmergency(1);
    setDifficulty({ done: false, knowledge: false, acquaintance: false });
    setEstimateDuration(25);
  };

  return (
    <Form onSubmit={handleSubmit}> 
    {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      {error  && <p style={{color: 'red'}}>{error}</p>}
      <Form.Group>
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          value={taskName}
          onChange={(e) =>{
            setTaskName(e.target.value)
            setError('');
            setErrorDelete('');
          }}
          // required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Importance</Form.Label>
        <Form.Control
          as="select"
          value={importance}
          onChange={(e) => setImportance(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <option key={i} value={i}>
              {i} Star
            </option>
          ))}
        </Form.Control>
      </Form.Group>
          
      <Form.Group>
        <Form.Label>Emergency Level</Form.Label>
        <Form.Control
          as="select"
          value={emergency}
          onChange={(e) => setEmergency(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <option key={i} value={i}>
              {i} Star
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Difficulty Level</Form.Label>
        <div>
          {['done', 'knowledge', 'acquaintance'].map((key) => (
            <label key={key} className="mr-3">
              <input
                type="checkbox"
                checked={difficulty[key]}
                onChange={() =>
                  setDifficulty({ ...difficulty, [key]: !difficulty[key] })
                }
              />{' '}
              {key}
            </label>
          ))}
        </div>
      </Form.Group>

      <Form.Group>
        <Form.Label>Estimated Duration (minutes):</Form.Label>
        <Form.Control
          type="number"
          min="1"
          value={estimateDuration}
          onChange={(e) => setEstimateDuration(Number(e.target.value))}
        >
        </Form.Control>
      </Form.Group>


      <Button type="submit">{editTask ? 'Update Task' : 'Add Task'}</Button>
    </Form>
  );
};

export default TaskForm;
