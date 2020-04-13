import React from "react";

import styles from "./App.module.scss";

import { useState, useEffect } from "react";

import { firestore } from "./firebase.js";

import {
  Button,
  Row,
  Container,
  Col,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [toDoInfo, updateToDoInfo] = useState("");
  const [toDoStartDate, updateToDoStartDate] = useState("");
  const [toDoDueDate, updateToDoDueDate] = useState("");
  const [toDoImgUrl, updateToDoImgUrl] = useState("");
  const [updateTask, setUpdateTask] = useState("");

  useEffect(() => {
    // first load up page...
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    firestore
      .collection("tasks")
      .get()
      .then((data) => {
        setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createTodo = () => {
    firestore
      .collection("tasks")
      .add({
        name: toDoInfo,
        start: toDoStartDate,
        due: toDoDueDate,
        img: toDoImgUrl,
      })
      .then(() => {
        fetchTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodo = (id) => {
    firestore
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        fetchTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTodo = (id) => {
    firestore
      .collection("tasks")
      .doc(id)
      .set({ name: updateTask })
      .then(() => {
        fetchTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Hello, I'm Lucian!</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h2 className={styles.heading}>Add a task into ToDo List</h2>
              <Form>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Control
                    placeholder="What to do?"
                    type="text"
                    value={toDoInfo}
                    onChange={(event) => updateToDoInfo(event.target.value)}
                  />

                  <Form.Control
                    placeholder="When to start?"
                    type="text"
                    value={toDoStartDate}
                    onChange={(event) =>
                      updateToDoStartDate(event.target.value)
                    }
                  />

                  <Form.Control
                    placeholder="When to finish?"
                    type="text"
                    value={toDoDueDate}
                    onChange={(event) => updateToDoDueDate(event.target.value)}
                  />

                  <Form.Control
                    placeholder="Please insert an image URL!"
                    type="text"
                    value={toDoImgUrl}
                    onChange={(event) => updateToDoImgUrl(event.target.value)}
                  />
                </Form.Group>
                <div class="col text-center">
                  <Button variant="primary" onClick={createTodo}>
                    Create Task
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <section className={styles.test}>
        {tasks.map((task) => (
          <div className={styles.inside} key={task.id}>
            <p>Name of the task: {task.name}</p>
            <p>Start date: {task.start}</p>
            <p>Finish date: {task.due}</p>

            <img src={task.img} alt={task.name} />

            <div>
              <Button
                className="text-white m-4"
                variant="danger"
                onClick={() => deleteTodo(task.id)}
              >
                Delete Task
              </Button>
            </div>

            <div>
              <input
                type="text"
                className=" "
                placeholder={task.name}
                onChange={(event) => setUpdateTask(event.target.value)}
              ></input>
            </div>
            <div>
              <Button
                className="text-white m-2"
                variant="success"
                onClick={() => updateTodo(task.id)}
              >
                Update Task
              </Button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default App;
