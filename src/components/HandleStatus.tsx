import React from "react";
import Button from "./Button";
import { useCharContext } from '../CharContext';
import { Filters } from "../assets/styles";

const HandleStatus: React.FC = () => {
  const { setStatus } = useCharContext();

  return (
      <Filters>
        <Button variant='secondary' text="Alive" onClick={()=>setStatus('alive')}/>
        <Button variant='secondary' text="Dead" onClick={()=>setStatus('dead')}/>
        <Button variant='secondary' text="Unknown" onClick={()=>setStatus('unknown')}/>
        <Button variant='primary' text="Reset" onClick={()=>setStatus('')}/>
      </Filters>
  );
};

export default HandleStatus;
