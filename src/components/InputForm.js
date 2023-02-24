import React from "react";
import { connect } from "react-redux";
import { addEmail } from "../ducks/email";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-javascript";
import "../styles/InputForm.css";
import { addMarkup } from "../ducks/markup";
import { clearForm, updateBodyValue, updateNameValue, updateSubjectValue } from "../ducks/InputForm";
import { closeModal } from "../ducks/general"


const InputForm = (props) => {
  const handleSave = () => {
    props.tab === 0 ? props.addEmail(props.formData) : props.addMarkup(props.formData);
    props.clearForm();
    props.closeModal();
  };
  const handleClose = () => {
    props.clearForm();
    props.closeModal();
  };
  return (
    <div className="input" style={{ display: props.isOpen ? "" : "none" }}>
      <div className="header">Add Email Template</div>
      <div className="body">
        <form>
          <label>
            NAME :
            <input
              type="text"
              value={props.formData.name}
              onChange={(e)=>props.updateName(e.target.value)}
            />
          </label>
          <label>
            SUBJECT :
            <input
              type="text"
              value={props.formData.desc}
              onChange={(e)=>props.updateSubject(e.target.value)}
            />
          </label>
          {props.tab === 0 ? (
            <label>
              BODY :
              <textarea
                rows="10"
                cols="50"
                value={props.formData.body}
                onChange={(e)=>props.updateBody(e.target.value)}
              />
            </label>
          ) : (
            <label className="htmlEditor">
              BODY :
              <AceEditor
                mode="javascript"
                theme="monokai"
                value={props.formData.body}
                onChange={(e)=>props.updateBody(props.tab === 0 ? e.target.value : e)}
                name="my-ace-editor"
                style={{ width: "300px", height: "250px" }}
                editorProps={{ $blockScrolling: true }}
              />
            </label>
          )}
        </form>
      </div>
      <div className="footer">
        <div className="buttons">
          <input
            type="button"
            value="SAVE"
            className="button"
            onClick={handleSave}
          />
          <input
            type="button"
            value="CANCEL"
            className="button"
            onClick={handleClose}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    emails: state.emailReducer2.emailData,
    markup: state.markupReducer2.markupData,
    isOpen: state.generalReducer.isOpen,
    tab: state.generalReducer.tab,
    formData: state.inputFormReducer.formData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEmail: (data) => {
      dispatch(addEmail(data));
    },
    addMarkup: (data) => {
      dispatch(addMarkup(data));
    },
    closeModal: () => dispatch(closeModal()),
    updateName: (data) => dispatch(updateNameValue(data)),
    updateBody: (data) => dispatch(updateBodyValue(data)),
    updateSubject: (data) => dispatch(updateSubjectValue(data)),
    clearForm: ()=> dispatch(clearForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
