import React from "react";
import Button from "./Button";
import { useCharContext } from '../CharContext';

const HandleSpecie: React.FC = () => {
  const { setSpecie } = useCharContext();

  return (
      <div>
        <Button text="Human" onClick={()=>setSpecie('human')}/>
        <Button text="Alien" onClick={()=>setSpecie('alien')}/>
        <Button text="Animal" onClick={()=>setSpecie('animal')}/>
        <Button text="Reset" onClick={()=>setSpecie('')}/>
      </div>
  );
};

export default HandleSpecie;
