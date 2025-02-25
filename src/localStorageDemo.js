import { useEffect, useState } from "react";
import React from "react";

const LocalStorageDemo = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("myValue");
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    localStorage.setItem("myValue", newValue);
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        value={value}
        placeholder="Type Something"
        onChange={handleChange}
      />
      <p>current value : {value}</p>
    </>
  );
};

export default LocalStorageDemo;
