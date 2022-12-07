import React from 'react'

const Todo = ({ text, isFavorite }) => {
    

    return (
        <div className={`todo ${isFavorite && 'todo__favorite'}`}>
            <div className="todo__wrapper">
                <div className="todo__star">&#127879;</div>
                <div className="todo__text">{text}</div>
            </div>
            <button className="todo__delete">&#10008;</button>
        </div>
    )
};

export default Todo;