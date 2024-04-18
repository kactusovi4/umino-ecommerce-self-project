import { useState } from "react";

const Button = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((x) => !x);
  };

  return (
    <>
      <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>

      {show && <h1>Hello from button</h1>}
    </>
  );
};

export default Button;
