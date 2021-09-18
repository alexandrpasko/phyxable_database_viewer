import React, { useState } from "react";

const SearchField = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <div>
      <input
        placeholder={props.placeholder}
        className="search_input"
        onChange={handleChange}
        value={inputValue}
      ></input>
    </div>
  );
};

export default SearchField;
