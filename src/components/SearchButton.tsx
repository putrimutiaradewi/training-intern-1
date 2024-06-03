import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

interface SearchButtonProps {
  onSearch: (query: string) => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="border p-2 rounded-md text-white bg-transparent"
        placeholder="Search..."
      />
      <button
        onClick={handleSearchClick}
        className="ml-1 p-1 bg-[#289DF5] rounded text-white text-2xl"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default SearchButton;
