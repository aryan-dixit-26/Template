import React from "react";
import FeatBar from './FeatBar'
import DataTable from './DataTable'
import InputForm from './InputForm'
import '../styles/Markup.css'

const Markup = () => {
  return (
    <div className="markup">
      {" "}
      <FeatBar />
      <InputForm />
      <DataTable /> 
    </div>
  );
};

export default Markup;
