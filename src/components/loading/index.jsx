import React from "react";
import "./style.css";
import BeatLoader from "react-spinners/BeatLoader";
const Loading = () => {
  return (
    <div className="container__loading">
      <BeatLoader color=" #ffffff" size={20} />
    </div>
  );
};

export default Loading;
