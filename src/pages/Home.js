import { Outlet, useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";

function Home() {
  const users = useOutletContext(); // Get users from context
  const userList = users.map(user => (
    <UserCard key={user.id} user={user} />
  ));

  return (
    <main>
      <h1>Home!</h1>
      <Outlet context={users} /> {/* Needed for nested UserProfile */}
      {userList}
    </main>
  );
}

export default Home;
