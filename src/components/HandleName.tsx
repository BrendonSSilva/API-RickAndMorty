import React from "react";
import { useCharContext } from '../CharContext';

const HandleName: React.FC = () => {
  const { name, setName } = useCharContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
      <form>
        <input type="text" name="" id="" placeholder="Name" value={name} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
  );
};

export default HandleName;
