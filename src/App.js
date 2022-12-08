import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import AddedUsers from './Components/Items/addedUsers';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <AddedUsers users={usersList} />
    </div>
  );
}

export default App;
