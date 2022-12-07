import React from 'react'

const AddTodo = () => {
    return (
        <div className='add-todo'>
            <input type="text"
                className='add-todo__input'
                placeholder='Write HERE, moron!' />
            <button type='submit'
                className='add-todo__btn'
            >Add</button>
        </div>
    );
}

export default AddTodo;
