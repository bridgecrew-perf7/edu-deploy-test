import React from "react";
import { SteppedLineTo } from "react-lineto";
import { Line } from "react-lineto";
const Test = () => {
  return (
    <div>
      <div className="A">Element A</div>
      <div className="B">Element B</div>
      <SteppedLineTo from="A" to="B" orientation="v" />
      <Line x0={0} y0={0} x1={10} y1={10} />
    </div>
  );
};

export default Test;
