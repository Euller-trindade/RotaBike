import React from "react";
import "./style.css";
import loading from "../../assets/loading.gif";
const Loading = () => {
  return (
    <div className="container__loading">
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
