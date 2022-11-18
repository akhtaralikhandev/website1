import "./index.css";
import { useState } from "react";
const Modal = () => {
  const [name, setName] = useState("modal");
  return (
    <div>
      <img
        className={name}
        src="https://www.w3schools.com/howto/img_snow.jpg"
        alt=""
        onClick={() => (name == "modal" ? setName("full") : "modal")}
      />
      <h1 onClick={() => setName("modal")} className="x">
        X
      </h1>
    </div>
  );
};
export default Modal;
