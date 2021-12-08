import React from "react";
import useFields from "./hooks/useFields";

const Signup = () => {
  const [formData, handleChange, resetForm] = useFields({
    username: '',
    email: '',
    password: ''
  })
  const handleSubmit = e => {
    e.preventDefault();
    resetForm();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>password</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>

    </form>
  )
}

export default Signup;
