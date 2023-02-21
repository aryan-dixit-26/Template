import React from "react";
import { connect } from "react-redux";
import {
  addEmail,
  closeModal,
  editEmail,
  updateFormData,
} from "../redux/email/actions";
import { addMarkup, editMarkup } from "../redux/markup/actions";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-javascript";
import "../styles/InputForm.css";

const InputForm = (props) => {
  const [formData, setFormData] = React.useState({
    name: "",
    desc: "",
    body: "",
  });
  // React.useEffect(()=>{
  //   setFormData(prev=>{
  //     if(props.isEdit)
  //       return{
  //         ...prev,
  //         name: props.formData.name,
  //         desc: props.formData.desc,
  //         body: props.formData.body
  //       }
  //     else{
  //       return{
  //         ...prev
  //       }
  //     }
  //   })
  // },[props.formData, props.isEdit])
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
        body: props.tab === 0 ? e.target.value :  e,
      };
      return newVal;
    });
  };

  const handleSave = () => {
    if (!props.isEdit) {
      props.tab === 0 ? props.addEmail(formData) : props.addMarkup(formData);
    }
    // else{
    //   props.tab === 0 ? props.editMail(props.formData.id,formData) : props.editMarkup(props.formDataMarkup.id,formData)
    // }
    // props.updateFormData(formData)
    props.closeModal();
    setFormData((prev) => {
      return {
        ...prev,
        name: "",
        desc: "",
        body: "",
      };
    });
  };
  const handleClose = () => {
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
    emails: state.emailReducer.data,
    isOpen: state.emailReducer.isOpen,
    formData: state.emailReducer.formData,
    formDataMarkup: state.markupReducer.formData,
    markup: state.markupReducer.data,
    tab: state.emailReducer.tab,
    isEdit: state.emailReducer.isEdit,
    isOpenMarkup: state.markupReducer.isOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEmail: (data) => {
      dispatch(addEmail(data));
    },
    closeModal: () => dispatch(closeModal()),
    editMail: (id, newData) => dispatch(editEmail(id, newData)),
    addMarkup: (data) => {
      dispatch(addMarkup(data));
    },
    editMarkup: (id, newData) => dispatch(editMarkup(id, newData)),
    updateFormData: (data) => dispatch(updateFormData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
