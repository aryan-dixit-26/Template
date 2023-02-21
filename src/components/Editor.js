import React from "react";
import { connect } from "react-redux";
import { closeEditor, editEmail, updateFormData } from "../redux/email/actions";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-javascript";
import {
  closeEditorMarkup,
  editMarkup,
  updateMarkupData,
} from "../redux/markup/actions";
import "../styles/Editor.css";

const Editor = (props) => {
  const [formData, setFormData] = React.useState({
    name: "",
    desc: "",
    body: "",
  });
  React.useEffect(()=>{
    setFormData(props.tab === 0 ? props.formData : props.formDataMarkup)
  }
  , [props]);
 
  if (!props.isEdit || !props.isEditMarkup) {
    return null;
  } else {
    const hanldeNameChange = (e) => {
      setFormData((prev) => {
        const newVal = {
          ...prev,
          name: e.target.value,
        };
        return newVal;
      });
    };
    const hanldeSubjectChange = (e) => {
      setFormData((prev) => {
        const newVal = {
          ...prev,
          desc: e.target.value,
        };
        return newVal;
      });
    };
    const hanldeBodyChange = (e) => {
      setFormData((prev) => {
        const newVal = {
          ...prev,
          body: props.tab === 0 ? e.target.value : e,
        };
        return newVal;
      });
    };
    const handleEdit = () => {
      if (props.tab === 0) {
        props.editMail(props.formData.id, formData);
        props.closeEditor();
      } else {
        props.editMarkup(props.formDataMarkup.id, formData);
        props.closeEditorMarkup();
      }
    //   setFormData((prev) => {
    //     return {
    //       ...prev,
    //       name: "",
    //       desc: "",
    //       body: "",
    //     };
    //   });
    };
    const handleClose = () => {
      !props.tab ? props.closeEditor() : props.closeEditorMarkup();
    };
    return (
      <div className="input" >
        <div className="header">Edit Template</div>
        <div className="body">
          <form>
            <label>
              NAME :
              <input
                type="text"
                value={formData.name}
                onChange={hanldeNameChange}
              />
            </label>
            <label>
              SUBJECT :
              <input
                type="text"
                value={formData.desc}
                onChange={hanldeSubjectChange}
              />
            </label>
            {props.tab === 0 ? (
            <label>
              BODY :
              <textarea
                rows="10"
                cols="50"
                value={formData.body}
                onChange={hanldeBodyChange}
              />
            </label>
          ) : (
            <label className="htmlEditor">
              BODY :
              <AceEditor
                mode="javascript"
                theme="monokai"
                value={formData.body}
                onChange={hanldeBodyChange}
                name="my-ace-editor"
                style={{ width: '300px', height: '250px'}}
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
    tab: state.emailReducer.tab,
    isEdit: state.emailReducer.isEdit,
    formData: state.emailReducer.formData,
    formDataMarkup: state.markupReducer.formData,
    isEditMarkup: state.markupReducer.isEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editMail: (id, newData) => dispatch(editEmail(id, newData)),
    editMarkup: (id, newData) => dispatch(editMarkup(id, newData)),
    updateFormData: () => dispatch(updateFormData()),
    closeEditor: () => dispatch(closeEditor()),
    closeEditorMarkup: () => dispatch(closeEditorMarkup()),
    updateFormDataMarkup: () => dispatch(updateMarkupData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
