import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  // let handleNameChange = (event) => {
  //      setFullName(event.target.value);

  // };

  // let handleUsername = (event) => {
  //     setUsername(event.target.value);

  // };

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>&nbsp;&nbsp;
      <input
        placeholder="enter full name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullName"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">Username</label>&nbsp;&nbsp;
      <input
        placeholder="enter your username"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>&nbsp;&nbsp;
      <input
        placeholder="enter your Password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
