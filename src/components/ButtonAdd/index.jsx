import React from "react";
import { StyleButtonAdd } from "./styles";
import {Entypo} from '@expo/vector-icons'; 


export const ButtonAdd = ({ color}) => {
  return (
    <StyleButtonAdd>
      <Entypo name="plus"color={"white"} size={24}/>
    </StyleButtonAdd>
  )

}