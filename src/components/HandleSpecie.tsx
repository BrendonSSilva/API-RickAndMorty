import React from "react";
import Button from "./Button";
import { useCharContext } from '../CharContext';
import { Filters } from "../assets/styles/index";

const HandleSpecie: React.FC = () => {
  const { setSpecie } = useCharContext();

  return (
      <Filters>
        <Button variant="secondary" text="Human" onClick={()=>setSpecie('human')}/>
        <Button variant="secondary" text="Alien" onClick={()=>setSpecie('alien')}/>
        <Button variant="secondary" text="Animal" onClick={()=>setSpecie('animal')}/>
        <Button variant="primary" text="Reset" onClick={()=>setSpecie('')}/>
      </Filters>
  );
};

export default HandleSpecie;
