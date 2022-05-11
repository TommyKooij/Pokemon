import React, { useState } from "react";
//import logo from './logo.svg';
import "./Searchfield.css";

const SetSearchfield = ({ value, setValue, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default SetSearchfield;
