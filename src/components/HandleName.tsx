import React from "react";
import { useCharContext } from '../CharContext';
import { ButtonDefault, StyledInput } from "../assets/styles";

const HandleName: React.FC = () => {
  const { name, setName } = useCharContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form>
      <StyledInput type="text" name="" id="" placeholder="Name" value={name} onChange={handleInputChange} />
    </form>
  );
};

export default HandleName;
