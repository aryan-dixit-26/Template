import React from "react";
import "../styles/FeatBar.css";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import { connect } from "react-redux";
import { clearSearch, searcher, updateSearchValue } from "../ducks/search";
import { openModal } from "../ducks/general"

const FeatBar = (props) => {
  return (
    <div className="featBar">
      <div className="add" onClick={()=>props.openModal()}>
        <IoAddOutline />
        ADD {" "}{props.tab ? "HTML": "EMAIL"}
      </div>
      <div className="search">
        <IoSearchOutline />
        <input placeholder="SEARCH" value={props.search} onKeyDown={(e)=>{
          if(e.key === "Enter"){
            props.tab === 0? props.performSearch(props.email) :  props.performSearch(props.markup)
          }
          if(e.key === "Backspace"){
            props.tab === 0? props.clearSearch() : props.clearSearch()
          }
        }} onChange={(e)=>{
          props.tab === 0 ?
          props.updateValue(e.target.value) : props.updateValue(e.target.value)
        }}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tab: state.generalReducer.tab,
    search: state.searchReducer.search,
    email: state.emailReducer2.emailData,
    markup: state.markupReducer2.markupData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: ()=>dispatch(openModal()),
    performSearch: (data)=>dispatch(searcher(data)),
    updateValue: (val)=>dispatch(updateSearchValue(val)),
    clearSearch: ()=>dispatch(clearSearch()),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(FeatBar);