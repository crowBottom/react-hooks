import React, { useState } from "react";

const useFields =(initailState) => {
  const [formData, setFormData] = useState(initailState);
  const handleChange = e => {
    setFormData(formData => ({
      ...formData,
      [e.target.name]: e.target.value
    }))
  }
  const resetFormData = () => {
    setFormData(initailState)
  }
  return [formData, handleChange, resetFormData];
}

export default useFields;
