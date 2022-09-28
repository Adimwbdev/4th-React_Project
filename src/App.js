import React,{useState} from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'What is React?',
    content: 'React is a favorite JS libray among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label:'The Color Red',
    value:'red',
  },
  {
    label:'The Color Green',
    value:'green',
  },
  {
    label:'The Color Blue',
    value:'Blue',
  }
];

export default () => {
  
  return ( 
  <div>
    <Translate/>
   </div>
  );
};

