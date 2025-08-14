import { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './components/userCard';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => alert(error));
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <h2 className=''></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mx-5">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              avatar={`https://i.pravatar.cc/150?img=${user.id}`}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center h-[70vh]">
            <h2 className="text-5xl font-bold text-center text-white">
              ! لا يوجد هذا الاسم
            </h2>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
