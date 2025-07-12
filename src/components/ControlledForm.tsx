import React, { FormEvent, useState } from "react";

const ControlledForm: React.FC = () => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [select, setSelect] = useState("option1");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      setMessage("Please enter text");
    } else {
      setMessage(`Text: ${text}\nChecked: ${checked}\nSelect: ${select}`);
    }
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <form className='col-md-6 mx-auto mt-5 p-4 border rounded bg-light' onSubmit={handleSubmit}>
      <h2 className="mb-4 text-center">Controlled Form</h2>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Text</label>
        <input
          type="text"
          className="form-control"
          id="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter text"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="checked"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
        <label htmlFor="checked" className="form-check-label">Checkbox</label>
      </div>
      <div className="mb-3">
        <label htmlFor="select" className="form-label">Select</label>
        <select
          className="form-select"
          id="select"
          value={select}
          onChange={e => setSelect(e.target.value)}
        >
          <option value="option1">Choice 1</option>
          <option value="option2">Choice 2</option>
          <option value="option3">Choice 3</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">Submit</button>
      {message && (
        <div className={`alert ${message.startsWith('Text:') ? 'alert-success' : 'alert-danger'}`} style={{marginTop:10}}>
          {message.split('\n').map((line, i) => <div key={i}>{line}</div>)}
        </div>
      )}
    </form>
  );
};

export default ControlledForm;
