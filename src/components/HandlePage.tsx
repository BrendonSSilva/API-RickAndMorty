import React from "react";
import Button from "./Button";
import { Filters } from "../assets/styles/index";
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
    <Filters>
      <div>

      <Button variant='primary' text="Prev" onClick={handlePageDown} />
      <Button variant='primary' text="Next" onClick={handlePageUp} />
      </div>
    </Filters>
  );
};

export default HandlePage;
