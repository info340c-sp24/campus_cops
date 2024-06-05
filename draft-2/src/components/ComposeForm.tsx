import { useState } from "react";

export function ComposeForm(props: any) {
  const { addMessageFunction, currentUser } = props;

  const [inputtedText, setInputtedText] = useState("");

  //typing
  const handleChange = (event: any) => {
    const value = event.target.value;
    setInputtedText(value);
  };

  //submission
  const handleSubmit = (event: any) => {
    event.preventDefault();

    addMessageFunction(currentUser, inputtedText);
    setInputtedText("");
  };

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
        <textarea
          className="form-control"
          rows={2}
          placeholder="enter in a message..."
          onChange={handleChange}
          value={inputtedText}
        />
        <button className="btn btn-secondary" type="submit">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}
