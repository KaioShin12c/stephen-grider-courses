import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  return (
    <div>
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
};

export default DropdownPage;
