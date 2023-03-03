import React from "react";
import "./ImageLinkFrom.css";

const ImageALinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <>
      <div>
        <p className="f3">
          {"This Magic Brain will detect faces in your pictures, give it a try"}
        </p>
        <div className="form shadow-5 pa4 br3 center">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageALinkForm;
