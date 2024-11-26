
import React from 'react';
import { Table, Button } from 'react-bootstrap';

 const TaskTable = ({ tasks, onEdit, onDelete }) => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Importance</th>
            <th>Emergency Level</th>
            <th>Difficulty Level</th>
            <th>Estimate Duration:(Minutes)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.number}>
              <td>{task.number}</td>
              <td>{task.name}</td>
              <td>{task.importance} Stars</td>
              <td>{task.emergency} Stars</td>
              <td>
                {Object.keys(task.difficulty)
                  .filter((key) => task.difficulty[key])
                  .join(', ')}
              </td>
              <td>{task.estimateDuration}</td>
              <td>
                <Button variant="warning" onClick={() =>{ onEdit(index); console.log(index)}}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => { onDelete(index); console.log(index)}}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
};

export default TaskTable;
