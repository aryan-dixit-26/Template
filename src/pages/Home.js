import React from "react";
import Header from "../components/Header";
import Mail from "../components/Mail";
import Markup from "../components/Markup";

const Home = () => {
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (val) => {
    setTab(val);
  };
  return (
    <div>
      <Header tab={tab} handleTabChange={handleTabChange} />
      {tab === 0 ? (
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

export default Home;
