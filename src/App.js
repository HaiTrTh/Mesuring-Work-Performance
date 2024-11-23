import React, { useState } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const [task, setTasks] = useState([]);
const [taskName, setTaskName] = useState('');
const [importance, setImportance] = useState(1);
const [emergency, setEmergency] = useState(1);
const [difficulty, setDifficulity] = useState({
  done: false,
  knowledge: false,
  acquaintance : false, 
})
const handleSubmit = () => {
  setTasks([...tasks])
}
