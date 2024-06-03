import React, { useState } from 'react';

export function ComposeForm(props) {
  const { addMessageFunction, currentChannel, currentUser } = props;

  const [inputtedText, setInputtedText] = useState('');

  //typing
  const handleChange = (event) => {
    const typedValue = event.target.value;
    setInputtedText(typedValue);
  }

  //submission
  const handleSubmit = (event) => {
    event.preventDefault();

    addMessageFunction(inputtedText, currentChannel, currentUser);   
    setInputtedText('');
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="enter a new message..."
          onChange={handleChange}
          value={inputtedText}
        />
        <button
          className="btn btn-secondary" type="submit">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}