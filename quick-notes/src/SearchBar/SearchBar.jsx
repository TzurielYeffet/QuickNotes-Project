import { useState } from "react";
import "./SearchBar.css"
export function SearchBar({ onFilter, notes }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filteredResults = value.trim()
      ? notes.filter(
          (note) =>
            (note.title || "").toLowerCase().includes(value.toLowerCase()) ||
            (note.content || "").toLowerCase().includes(value.toLowerCase())
        )
      : notes;

    onFilter(filteredResults);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Filter notes..."
          value={query}
          onChange={handleSearch}
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              onFilter(notes);
            }}
            className="clear-button"
            type="button"
          >
            &times;
          </button>
        )}
      </div>
    </>
  );
}
