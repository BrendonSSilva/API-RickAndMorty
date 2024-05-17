import React from "react";
import Button from "./Button";
import { useCharContext } from '../CharContext';
import { Filters } from "../assets/styles";

const HandleStatus: React.FC = () => {
  const {status, setStatus } = useCharContext();

  return (
    <Filters>
      <div>
        <Button variant='secondary' text="Alive" onClick={() => setStatus('alive')} />
        <Button variant='secondary' text="Dead" onClick={() => setStatus('dead')} />
        <Button variant='secondary' text="Unknown" onClick={() => setStatus('unknown')} />
        <Button variant='primary' text="Reset" onClick={() => setStatus('')} /> <br/>
      {status && (<>Status: {status} <br /></>)}
      </div>
    </Filters>
  );
};

export default HandleStatus;
