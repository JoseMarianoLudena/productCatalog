// Import statements should be at the top of the file
import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div style={{ padding: '10px' }}>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for products..."
        style={{ padding: '8px', width: '100%', fontSize: '16px' }}
      />
    </div>
  );
};

export default SearchBar;
