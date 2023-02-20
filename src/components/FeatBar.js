import React from "react";
import "../styles/FeatBar.css";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import { emptySearch, openModal, performSearch, updateValue } from "../redux/email/actions";
import {  emptySearchMarkup, performSearchMarkup, updateValueMarkup } from "../redux/markup/actions";
import { connect } from "react-redux";

const FeatBar = (props) => {
  return (
    <div className="featBar">
      <div className="add" onClick={props.openModal}>
        <IoAddOutline />
        ADD {" "}{props.tab ? "HTML": "EMAIL"}
      </div>
      <div className="search">
        <IoSearchOutline />
        <input placeholder="SEARCH" value={props.tab === 0? props.search : props.searchMarkup} onKeyDown={(e)=>{
          if(e.key === "Enter"){
            props.tab === 0? props.performSearch() :  props.performSearchMarkup()
          }
          if(e.key === "Backspace"){
            props.tab === 0? props.emptySearch() : props.emptySearchMarkup()
          }
        }} onChange={(e)=>{
          props.tab === 0 ?
          props.updateValue(e.target.value) : props.updateValueMarkup(e.target.value)
        }}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tab: state.emailReducer.tab,
    search: state.emailReducer.search,
    searchMarkup: state.markupReducer.search
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: ()=>dispatch(openModal()),
    performSearch: ()=>dispatch(performSearch()),
    updateValue: (val)=>dispatch(updateValue(val)),
    emptySearch: ()=>dispatch(emptySearch()),
    performSearchMarkup: ()=>dispatch(performSearchMarkup()),
    emptySearchMarkup: ()=>dispatch(emptySearchMarkup()),
    updateValueMarkup: ()=>dispatch(updateValueMarkup())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(FeatBar);