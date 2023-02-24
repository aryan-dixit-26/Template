import React from "react";
import FeatBar from './FeatBar'
import DataTable from './DataTable'
import InputForm from './InputForm'
import '../styles/Markup.css'
import Editor from "./Editor";

const Markup = () => {
  return (
    <div className="markup">
      {" "}
      <FeatBar />
      <InputForm />
      <Editor />
      <DataTable />
    </div>
  );
};

export default Markup;
