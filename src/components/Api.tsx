import React, { useEffect, useState } from "react";

interface UserInterface {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

const Api = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Network error");
        const json = await response.json();
        setUsers(json);
        setTimeout(() => setLoading(false), 2000);
      } catch (error: any) {
        setTimeout(() => {
          setError(error.message);
          setLoading(false);
        }, 2000);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='col-md-6 mx-auto mt-5 p-4 border rounded bg-light'>
      <h2 className="mb-4 text-center">useEffect</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <ul className="list-unstyled mt-3">
          {users.map(user => (
            <li key={user.id} className="mb-3">
              <strong>User: {user.name}</strong><br/>
              <span>Email: {user.email}</span> <br/>
              <span>Phone: {user.phone}</span> <br/>
              <span>Username: {user.username}</span><br/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Api;
