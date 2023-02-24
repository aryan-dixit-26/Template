import React from "react";
import { connect } from "react-redux";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-javascript";
import "../styles/Editor.css";
import { editEmail } from "../ducks/email";
import { editMarkup } from "../ducks/markup";
import {
  clearForm,
  updateBodyValue,
  updateNameValue,
  updateSubjectValue,
} from "../ducks/InputForm";
import { closeEditor } from "../ducks/general";


const Editor = (props) => {
  React.useEffect(() => {
    // props.formUpdater(props.formData.id, props.tab === 0 ? props.email :  props.markup)
  }, [props]);

  if (!props.isEdit) {
    return null;
  } else {
    const handleEdit = () => {
      if (props.tab === 0) {
        props.editMail(props.formData.id, props.formData);
      } else {
        props.editMarkup(props.formData.id, props.formData);
      }
      props.clearForm();
      props.closeEditor();
    };
    const handleClose = () => {
      props.clearForm();
      props.closeEditor();
    };
    return (
      <div className="input">
        <div className="header">Edit Template</div>
        <div className="body">
          <form>
            <label>
              NAME :
              <input
                type="text"
                value={props.formData.name}
                onChange={(e) => props.updateName(e.target.value)}
              />
            </label>
            <label>
              SUBJECT :
              <input
                type="text"
                value={props.formData.desc}
                onChange={(e) => props.updateSubject(e.target.value)}
              />
            </label>
            {props.tab === 0 ? (
              <label>
                BODY :
                <textarea
                  rows="10"
                  cols="50"
                  value={props.formData.body}
                  onChange={(e) => props.updateBody(e.target.value)}
                />
              </label>
            ) : (
              <label className="htmlEditor">
                BODY :
                <AceEditor
                  mode="javascript"
                  theme="monokai"
                  value={props.formData.body}
                  onChange={(e) =>
                    props.updateBody(props.tab === 0 ? e.target.value : e)
                  }
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
              value="EDIT"
              className="button"
              onClick={handleEdit}
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
  }
};
const mapStateToProps = (state) => {
  return {
    tab: state.generalReducer.tab,
    isEdit: state.generalReducer.isEdit,
    // formData: state.emailReducer.formData,
    formData: state.inputFormReducer.formData,
    email: state.emailReducer2.emailData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editMail: (id, newData) => dispatch(editEmail(id, newData)),
    editMarkup: (id, newData) => dispatch(editMarkup(id, newData)),
    closeEditor: () => dispatch(closeEditor()),
    updateName: (data) => dispatch(updateNameValue(data)),
    updateBody: (data) => dispatch(updateBodyValue(data)),
    updateSubject: (data) => dispatch(updateSubjectValue(data)),
    clearForm: () => dispatch(clearForm()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
