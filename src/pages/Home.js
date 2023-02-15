import React from "react";
import Header from "../components/Header";

const Home = () => {
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (val) => {
    setTab(val);
  };
  return (
    <div>
      <Header tab={tab} handleTabChange={handleTabChange}/>
    </div>
  );
};

export default Home;
