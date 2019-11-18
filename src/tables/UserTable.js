import React from "react";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Task Name</th>
        <th>Assigned To</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Tags</th>
        <th>Followers</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.assigned}</td>
            <td>{user.startdate}</td>
            <td>{user.enddate}</td>
            <td>{user.tags}</td>
            <td>{user.followers}</td>
            <td>{user.description}</td>

            <td>
              <button
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Edit
              </button>
              <button
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
