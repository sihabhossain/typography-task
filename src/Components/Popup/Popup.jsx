// CSS
import "./Popup.css";
// Icons
import { FaPlus, FaRotateLeft, FaDesktop } from "react-icons/fa6";

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
} from "../../Variables/Variables";

const Popup = ({ dispatch, state }) => {
  return (
    <>
      <div className="typography_body">
        <section className="head_section">
          <h3>Typography</h3>
          <div>
            <div>
              <button>
                <FaRotateLeft></FaRotateLeft>
              </button>
              <button>
                <FaPlus></FaPlus>
              </button>
            </div>
          </div>
        </section>

        {/* Main popup content */}
        <main className="main-content">
          {/* Font family section */}
          <div className="select_section">
            <p>Family</p>
            <select
              name="fontFamily"
              onChange={(e) =>
                dispatch({
                  type: FONT_FAMILY,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option selected disabled>
                Default
              </option>
              <option value="Roboto">Roboto</option>
              <option value="Poppins">Poppins</option>
              <option value="Lato">Lato</option>
            </select>
          </div>

          {/* Size section */}
          <div className="range_section">
            <div className="measurement_name">
              <p>
                <span>Size</span> <FaDesktop></FaDesktop>
              </p>
              <select
                name="sizeUnit"
                onChange={(e) =>
                  dispatch({
                    type: SIZE_UNIT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              >
                <option selected disabled>
                  px
                </option>
                <option value="em">em</option>
                <option value="rem">rem</option>
              </select>
            </div>
            <div className="measurement_unit">
              <input
                type="range"
                name="size"
                min="0"
                max="100"
                defaultValue="0"
                onChange={(e) =>
                  dispatch({
                    type: SIZE,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <input type="text" value={state.size} />
            </div>
          </div>

          <div className="select_section">
            <p>Weight</p>
            <select
              name="weight"
              onChange={(e) =>
                dispatch({
                  type: WEIGHT,
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              <option selected disabled>
                Default
              </option>
              <option value="Regular 400">Regular 400</option>
              <option value="Medium 500">Medium 500</option>
              <option value="SemiBold 600">SemiBold 600</option>
            </select>
          </div>

          <div
            className="select_section"
            onChange={(e) =>
              dispatch({
                type: TRANSFORM,
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <p>Transform</p>
            <select name="transform">
              <option value="Rotate">Default</option>
              <option value="Scale">Scale</option>
              <option value="Skew">Skew</option>
            </select>
          </div>

          <div
            className="select_section"
            onChange={(e) =>
              dispatch({
                type: STYLE,
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <p>Style</p>
            <select name="style">
              <option selected disabled>
                Default
              </option>
              <option value="Inline">Inline</option>
              <option value="Internal">Internal</option>
              <option value="External">External</option>
            </select>
          </div>

          <div
            className="select_section"
            onChange={(e) =>
              dispatch({
                type: DECORATION,
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <p>Decoration</p>
            <select name="decoration">
              <option selected disabled>
                Default
              </option>
              <option value="Overline">Overline</option>
              <option value="Underline">Underline</option>
              <option value="Line Through">Line Through</option>
            </select>
          </div>

          <div className="range_section">
            <div className="measurement_name">
              <p>
                <span>Line-Height</span> <FaDesktop></FaDesktop>
              </p>
              <select
                name="lineHeightUnit"
                onChange={(e) =>
                  dispatch({
                    type: LINE_HEIGHT_UNIT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              >
                <option selected disabled>
                  px
                </option>
                <option value="em">em</option>
                <option value="rem">rem</option>
              </select>
            </div>
            <div className="measurement_unit">
              <input
                type="range"
                name="lineHeight"
                min="0"
                max="100"
                defaultValue="0"
                onChange={(e) =>
                  dispatch({
                    type: LINE_HEIGHT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <input type="text" value={state.lineHeight} />
            </div>
          </div>

          <div className="range_section">
            <div className="measurement_name">
              <p>
                <span>Letter Spacing</span> <FaDesktop></FaDesktop>
              </p>
              <select
                name="letterSpacingUnit"
                onChange={(e) =>
                  dispatch({
                    type: LETTER_SPACING_UNIT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              >
                <option selected disabled>
                  px
                </option>
                <option value="em">em</option>
                <option value="rem">rem</option>
              </select>
            </div>
            <div className="measurement_unit">
              <input
                type="range"
                name="letterSpaceing"
                min="0"
                max="100"
                defaultValue="0"
                onChange={(e) =>
                  dispatch({
                    type: LETTER_SPACING,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <input type="text" value={state.letterSpaceing} />
            </div>
          </div>

          <div className="range_section">
            <div className="measurement_name">
              <p>
                <span>Word Spacing</span> <FaDesktop></FaDesktop>
              </p>
              <select
                name="wordSpacingUnit"
                onChange={(e) =>
                  dispatch({
                    type: WORD_SPACING_UNIT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              >
                <option selected disabled>
                  Px
                </option>
                <option value="em">em</option>
                <option value="rem">rem</option>
              </select>
            </div>
            <div className="measurement_unit">
              <input
                type="range"
                name="wordSpacing"
                min="0"
                max="100"
                defaultValue="0"
                onChange={(e) =>
                  dispatch({
                    type: WORD_SPACING,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <input type="text" value={state.wordSpacing} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Popup;
