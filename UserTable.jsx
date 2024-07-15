import React from 'react';
import './Usertable.css'

const UserTable = ({ users }) => {
  return (
    <div className="table-container">
    <table className="user-table">
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Username</th>
          <th>No of Votes</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.votes}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default UserTable;
