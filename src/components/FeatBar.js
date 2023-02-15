import React from "react";
import "../styles/FeatBar.css";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import { addEmail } from "../redux/email/actions";
import { connect } from "react-redux";

const FeatBar = (props) => {
  console.log("Data This=>", props.emails )
  return (
    <div className="featBar">
      <div className="add" onClick={()=>{props.addEmail({
        name: "Aryan Dixit", desc: "This is my mail"
      })}}>
        <IoAddOutline />
        Add Email
      </div>
      <div className="search">
        <IoSearchOutline />
        <input placeholder="SEARCH" />
      </div>
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
    addEmail: (data) =>
      dispatch(addEmail(data)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(FeatBar);