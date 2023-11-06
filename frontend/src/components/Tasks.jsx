import React, { useState } from 'react';
import cx from 'classnames';

import uncheckImage from '../images/checkbox-uncheck.svg';
import checkImage from '../images/checkbox-check.svg';

const Tasks = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            content: 'Sign contract for "What are conference organizers afraid of?"',
            completed: true,
        },
        {
            id: 2,
            content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
            completed: true,
        },
        {
            id: 3,
            content: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
            completed: true,
        },
        {
            id: 4,
            content: 'Create 4 Invisible User Experiences you Never Knew About',
            completed: false,
        },
        {
            id: 5,
            content: 'Read "Following makes Medium better"',
            completed: false,
        },
        {
            id: 6,
            content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
            completed: false,
        },
    ]);

    const toggleComplete = (todoId) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === todoId) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };

    const deleteTodo = (todoId) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    };

    return (
        <div className="col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="h3">Tareas</h6>
                            </div>

                            <div className="content-task">
                                <form>
                                    {todos.map((todo) => (
                                        <div className={cx("todo-item-task", { completed: todo.completed })} key={todo.id}>
                                            <div className="todo-item-wrapper-task">
                                                <div className="checkbox-icons-task" onClick={() => toggleComplete(todo.id)}>
                                                    <img className="checkbox-icon-task" src={todo.completed ? checkImage : uncheckImage} width={17} />
                                                </div>
                                                <div className="todo-content-task">{todo.content}</div>
                                                <a className="delete-icon-task" onClick={() => deleteTodo(todo.id)}>&times;</a>
                                            </div>
                                        </div>
                                    ))}
                                </form>
                            </div>
                            <div className="footer">
                                <hr />
                                <div className="stats">
                                    <i className="fa fa-history"></i> Updated 3 minutes ago
                                </div>
                            </div>                            
                        </div>
                    </div>
    );
};

export default Tasks;
