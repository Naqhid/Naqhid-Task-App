import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
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
        placeholder="User Name"
        name="followers"
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

      <button>Add Data</button>
    </form>
  );
};

export default AddUserForm;
