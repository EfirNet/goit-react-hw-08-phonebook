import { memo } from 'react';

import { Input, Label } from './Filter.styled';

const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <Label>Find contacts by name</Label>
      <Input
        value={filter}
        name="filter"
        onChange={handleChange}
        type="text"
        placeholder="Contact search..."
      />
    </>
  );
};

export default memo(Filter);
