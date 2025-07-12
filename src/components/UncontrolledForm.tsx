import React, {FormEvent, useRef } from "react";

const UncontrolledForm = () => {
  const [message, setMessage] = React.useState<string | null>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const uncontrollformElements = e.currentTarget.elements as UncontrolledFormElements;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const msg = username && password ? `Login is successful` : `Please fill in all fields or check your inputs`;
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <form className="col-md-6 mx-auto mt-5 p-4 border rounded bg-light" onSubmit={handleSubmit}>
      <h2 className="mb-4 text-center">Uncontrolled Form</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          ref={usernameRef}
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          ref={passwordRef}
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">Login</button>
      {message && (
        <div
          className={`mt-3 p-2 rounded text-center ${message.includes('successful') ? 'bg-success text-white' : 'bg-danger text-white'}`}
        >
          {message}
        </div>
      )}
    </form>
  );
}

export default UncontrolledForm;
