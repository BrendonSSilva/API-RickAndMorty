import React from "react";
import Button from "./Button";
import { useCharContext } from '../CharContext';

const HandleStatus: React.FC = () => {
  const { setStatus } = useCharContext();

  return (
      <div>
        <Button text="Alive" onClick={()=>setStatus('alive')}/>
        <Button text="Dead" onClick={()=>setStatus('dead')}/>
        <Button text="Unknown" onClick={()=>setStatus('unknown')}/>
        <Button text="Reset" onClick={()=>setStatus('')}/>
      </div>
  );
};

export default HandleStatus;
