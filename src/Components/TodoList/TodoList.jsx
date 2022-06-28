import React from 'react';
import './TodoList.css'
import TodoListItem from "../TodoListItem/TodoListItem";
const TodoList = ({todoData, onDeleted}) => {

    const elements = todoData.map(({id, ...itemProps}) => (
        <TodoListItem key={id} {...itemProps} onDeleted={()=> onDeleted(id)}/>
    ))
    return (
        <div className="todolist">
            <ul className="list-group">
                {elements}
            </ul>
        </div>
    );
};

export default TodoList;
