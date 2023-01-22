import { memo } from 'react';

import { Input, Label } from './Filter.styled';

const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <Label>Search</Label>
      <Input
        value={filter}
        name="filter"
        onChange={handleChange}
        type="text"
        placeholder="search..."
      />
    </>
  );
};

export default memo(Filter);
