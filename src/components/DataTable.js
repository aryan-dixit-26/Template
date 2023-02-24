import React from "react";
import { IoPencil } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import { connect } from "react-redux";
import "../styles/DataTable.css";
import { deleteEmail } from "../ducks/email";
import { deleteMarkup } from "../ducks/markup";
import { editorOpener } from "../ducks/general";
import { formUpdater, updateIdValue } from "../ducks/InputForm";
const DataTable = (props) => {
  const data =  props.tab === 0 ? !props.search ? props.emails : props.searchResult : !props.search ? props.markup : props.searchResult
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.name}</td>
              <td>{ele.desc}</td>
              <td>
                <div className="actions">
                  <div className="action" onClick={()=>{
                    props.openEditor(ele.id,updateIdValue, formUpdater,props.tab === 0 ?  props.emails : props.markup)}
                    }>
                    <span>EDIT</span>
                    <IoPencil />
                  </div>
                  <div className="action" onClick={()=>props.tab === 0 ? props.deleteEmail(ele.id) : props.deleteMarkup(ele.id)}>
                    <span>DELETE</span>
                    <ImBin />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    emails: state.emailReducer2.emailData,
    tab: state.generalReducer.tab,
    markup: state.markupReducer2.markupData,
    search: state.searchReducer.search,
    searchResult: state.searchReducer.searchResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEmail: (id)=>dispatch(deleteEmail(id)),
    openEditor: (id,setFormDataId,formUpdater,data)=>dispatch(editorOpener(id,setFormDataId,formUpdater,data)),
    deleteMarkup: (id)=>dispatch(deleteMarkup(id)),
    formUpdater: (id,data)=>dispatch(formUpdater(id,data))
  };  
};
export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
