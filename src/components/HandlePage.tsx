import React from "react";
import Button from "./Button";
import { useCharContext } from '../CharContext';

const HandlePage: React.FC = () => {
  const { page, setPage } = useCharContext();

  const handlePageUp = () => {
    setPage((prevPage: number) => (prevPage < 43 ? prevPage + 1 : 42));
  };

  const handlePageDown = () => {
    setPage((prevPage: number) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div>
      <Button text="Page Up" onClick={handlePageUp} />
      <Button text="Page Down" onClick={handlePageDown} />
    </div>
  );
};

export default HandlePage;
