import React, {useEffect, useState} from 'react';
import {todService} from "../../services";
import Todo from "./Todo/Todo";

const TList = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        todService.getAll().then(({data}) => setTodos(data))
    }, [])
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default TList;