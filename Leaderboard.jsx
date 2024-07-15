import React from 'react';
import UserTable from './UserTable';

const LeaderBoard = () => {
  const users = [
    {  username: 'Ariyana', votes: 0 },
    {  username: 'Jiya', votes: 0 },
    { username: 'Angelina', votes: 0 },
    {  username: 'Yashna', votes: 0 },
    {username: 'Riya', votes: 1},
    ];

  return (
    <div>
      <h1>LeaderBoard</h1>
      <UserTable users={users} />
    </div>
  );
};

export default LeaderBoard;


