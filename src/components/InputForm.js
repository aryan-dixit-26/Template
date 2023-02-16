import React from "react";
import { connect } from "react-redux";
import { addEmail } from "../redux/email/actions";
import "../styles/InputForm.css";

const InputForm = (props) => {
    const [formData, setFormData] = React.useState({
        name:"", desc:"", body:""
    })
    const hanldeNameChange = (e)=>{
        setFormData(prev=>{
            const newVal = {
                ...prev,
                name: e.target.value
            }
            return newVal
        })
    }
    const hanldeSubjectChange = (e)=>{
        setFormData(prev=>{
            const newVal = {
                ...prev,
                desc: e.target.value
            }
            return newVal
        })
    }
    const hanldeBodyChange = (e)=>{
        setFormData(prev=>{
            const newVal = {
                ...prev,
                body: e.target.value
            }
            return newVal
        })
    }

    const handleSave = ()=>{
        props.addEmail(formData)
    }
  return (
    <div className="input">
      <div className="header">Add Email Template</div>
      <div className="body">
        <form>
          <label>
            NAME :
            <input type="text" value={formData.name} onChange={hanldeNameChange}/>
          </label>
          <label>
            SUBJECT :
            <input type="text" value={formData.desc} onChange={hanldeSubjectChange}/>
          </label>
          <label>
            BODY :
            <textarea rows="10" cols="50" value={formData.body} onChange={hanldeBodyChange}/>
          </label>
        </form>
      </div>
      <div className="footer">
        <div className="buttons">
          <input type="button" value="SAVE" className="button" onClick={handleSave} />
          <input type="button" value="CANCEL" className="button" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state=>{
    return {
        emails: state.data
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        addEmail: (data)=>{
            dispatch(addEmail(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InputForm);
