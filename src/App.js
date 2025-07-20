import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"; // Make sure filename is NavBar.js (capital B)

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      {/* Pass users to all nested routes via Outlet context */}
      <Outlet context={users} />
    </>
  );
}

export default App;


