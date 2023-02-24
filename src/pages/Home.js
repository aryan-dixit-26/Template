import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Mail from "../components/Mail";
import Markup from "../components/Markup";
import { changeTab } from "../ducks/general";

const Home = (props) => {
  const handleTabChange = (val) => {
    props.changeTab(val)
  };
  return (
    <div>
      <Header tab={props.tab} handleTabChange={handleTabChange} />
      {props.tab === 0 ? (
        <>
          {" "}
          <Mail />
        </>
      ) : (
        <>
          <Markup />
        </>
      )}
    </div>
  );
};

const mapStateToProps = state =>{
  return {
    tab: state.generalReducer.tab
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    changeTab: (val)=>dispatch(changeTab(val))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
