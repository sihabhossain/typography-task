// CSS
import { useReducer, useState } from "react";
import "./App.css";
// ICONS
import { BsGlobe } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
import Popup from "./Components/Popup/Popup";
import Results from "./Components/Results/Results";

// Variable imports
import {
  DECORATION,
  FONT_FAMILY,
  LETTER_SPACING,
  LETTER_SPACING_UNIT,
  LINE_HEIGHT,
  LINE_HEIGHT_UNIT,
  SIZE,
  SIZE_UNIT,
  STYLE,
  TRANSFORM,
  WEIGHT,
  WORD_SPACING,
  WORD_SPACING_UNIT,
} from "../src/Variables/Variables";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Popup
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // UseReducer

  const initialState = {
    fontFamily: "",
    size: 0,
    sizeUnit: "px",
    weight: "",
    transform: "",
    style: "",
    decoration: "",
    lineHeight: 0,
    lineHeightUnit: "px",
    letterSpaceing: 0,
    letterSpaceingUnit: "px",
    wordSpacing: 0,
    wordSpacingUnit: "px",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case FONT_FAMILY:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case SIZE:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case WEIGHT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case TRANSFORM:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case STYLE:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case DECORATION:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case LINE_HEIGHT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case LETTER_SPACING:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case WORD_SPACING:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case SIZE_UNIT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case LINE_HEIGHT_UNIT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case LETTER_SPACING_UNIT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case WORD_SPACING_UNIT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("Results: ", state);

  return (
    <>
      {/* Typography body */}
      <div>
        {/* Typorgraphy pop up */}
        <div className="typography-popup">
          <div>
            <p>Typography</p>
          </div>

          {/* popup icons */}
          <div className="popup-icons">
            <div>
              <BsGlobe className="globe-icon"></BsGlobe>
            </div>
            {/* Open popup */}
            <div>
              <RiEdit2Fill onClick={togglePopup}></RiEdit2Fill>
              {isOpen && (
                <div className="popup">
                  <div className="popup-content">
                    {/* Popup component */}
                    <Popup dispatch={dispatch} state={state}></Popup>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Result  */}
        <div className="results-section">
          <Results state={state}></Results>
        </div>
      </div>
    </>
  );
};

export default App;
