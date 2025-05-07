import React, { useState, memo } from "react";

const Callbackdemo = ({ adjective , demoFunc}) => {
  console.log("nevbar is rendering");
  return (
    <>
      <div>i am an {adjective} Component.</div>
      <p>{demoFunc()}</p>
    </>
  );
};

export default memo(Callbackdemo);
