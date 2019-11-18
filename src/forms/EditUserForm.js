import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label>No</label>
      <input
        type="text"
        placeholder="number"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Task Name</label>
      <input
        type="text"
        placeholder="Finish Contributor List"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label>Assigned to</label>
      <input
        type="text"
        placeholder="User Name"
        name="assigned"
        value={user.assigned}
        onChange={handleInputChange}
      />
      <label>Start Date</label>
      <input
        type="text"
        placeholder="14th Nov 2019"
        name="startdate"
        value={user.startdate}
        onChange={handleInputChange}
      />
      <label>End Date</label>
      <input
        type="text"
        placeholder="25th Nov 2019"
        name="enddate"
        value={user.enddate}
        onChange={handleInputChange}
      />
      <label>Tags</label>
      <input
        type="text"
        placeholder="tags"
        name="tags"
        value={user.tags}
        onChange={handleInputChange}
      />
      <label>Followers</label>
      <input
        type="text"
        name="followers"
        placeholder="User Name"
        value={user.followers}
        onChange={handleInputChange}
      />
      <label>Description</label>
      <input
        type="text"
        placeholder="Finish Contributor List"
        name="description"
        value={user.description}
        onChange={handleInputChange}
      />
      <button>Update Data</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
