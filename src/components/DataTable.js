import React from "react";
import { IoPencil } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import { connect } from "react-redux";
import { addEmail } from "../redux/email/actions";
import { editEmail } from "../redux/email/actions";
import { deleteEmail } from "../redux/email/actions";
import { openEditor } from "../redux/email/actions";
import "../styles/DataTable.css";
import { deleteMarkup } from "../redux/markup/actions";
const DataTable = (props) => {
  const data =  props.tab === 0 ? !props.search ? props.emails : props.searchResult : !props.searchMarkup ? props.markup : props.searchResultMarkup
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
                  <div className="action" onClick={()=>props.openEditor(ele.id)}>
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
    emails: state.emailReducer.data,
    tab: state.emailReducer.tab,
    markup: state.markupReducer.data,
    searchResult: state.emailReducer.searchResult,
    search: state.emailReducer.search,
    searchMarkup: state.markupReducer.search,
    searchResultMarkup: state.markupReducer.searchResult
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEmail: (data) => dispatch(addEmail(data)),
    editEmail: (id,data) => dispatch(editEmail(id, data)),
    deleteEmail: (id)=>dispatch(deleteEmail(id)),
    openEditor: (id)=>dispatch(openEditor(id)),
    deleteMarkup: (id)=>dispatch(deleteMarkup(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
