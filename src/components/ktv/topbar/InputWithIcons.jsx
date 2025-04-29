import React from "react";
import { FaSearch } from "react-icons/fa"; // Example icons from react-icons
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

function InputWithIcons() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="input-container">
      <span className="prefix-icon">
        <IoIosClose color="black" onClick={() => setSearchValue("")} />
      </span>
      <input
        type="text"
        className="topbar-search-input"
        placeholder="بحث"
        value={searchValue}
        onChange={() => setSearchValue(event.target.detail)}
      />
      <span className="suffix-icon">
        <FaSearch color="black" />
      </span>
    </div>
  );
}

export default InputWithIcons;
