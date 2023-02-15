import React from "react";
import { IoPencil } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import { connect } from "react-redux";
import { addEmail } from "../redux/email/actions";
import { editEmail } from "../redux/email/actions";
import { deleteEmail } from "../redux/email/actions";
import "../styles/DataTable.css";
const DataTable = (props) => {
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
          {props.emails.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.name}</td>
              <td>{ele.desc}</td>
              <td>
                <div className="actions">
                  <div className="action" onClick={()=>props.editEmail(ele.id,{ name: "Chikka", desc: "This is Chikka's email"})}>
                    <span>EDIT</span>
                    <IoPencil />
                  </div>
                  <div className="action" onClick={()=>props.deleteEmail(ele.id)}>
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
    emails: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEmail: (data) => dispatch(addEmail(data)),
    editEmail: (id,data) => dispatch(editEmail(id, data)),
    deleteEmail: (id)=>dispatch(deleteEmail(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
