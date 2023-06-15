import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/todoActions';

const AddTodo = ({ addTodo }) => {
  const [todoLabel, setTodoLabel] = useState('');

  const handleInputChange = (e) => {
    setTodoLabel(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoLabel.trim() !== '') {
      addTodo({
        id: Date.now(),
        label: todoLabel,
        completed: false,
      });
      setTodoLabel('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoLabel}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);

{/* <div className='main-div'>
       <div className='child-div'>
              <figure>
                <figcaption> Write Today's agenda</figcaption>
              </figure>

            <div className='addItems'>
              <input type="text" placeholder="Add Items Here"/>
              <i className='fa fa-plus add-btn' /> 
            </div>
       </div>
     </div> */}