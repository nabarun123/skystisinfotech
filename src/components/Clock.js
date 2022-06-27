import React, { useState } from "react";
function Clock() {
  let time = new Date().toLocaleTimeString();
  const [clock, setClock] = useState(time);

  setInterval(() => {
    time = new Date().toLocaleTimeString();
    setClock(time);
  }, 1000);

  return <div>{clock}</div>;
}

export default Clock;
