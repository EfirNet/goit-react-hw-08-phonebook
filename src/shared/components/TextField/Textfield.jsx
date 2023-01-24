import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Input, Label } from './TextField.styled';

const TextField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type,
}) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      {label && <Label htmlFor={id}>{label}: </Label>}
      <Input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
};

export default TextField;

TextField.defaultProps = {
  type: 'text',
  required: false,
};
