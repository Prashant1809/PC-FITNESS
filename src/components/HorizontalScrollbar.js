import React, { useContext } from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

import ExerciseCart from "./ExerciseCart";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Box onClick={scrollPrev} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Box>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Box onClick={scrollNext} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Box>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodypart, bodyParts }) => {
  return (
    <div style={{ width: "100%", overflowX: "scroll" }}>
      <VisibilityContext.Provider>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {data.map((item) => {
            return (
              <div key={item.id || item} style={{ margin: "0 40px" }}>
                {bodyParts ? (
                  <BodyPart
                    item={item}
                    bodyPart={bodyPart}
                    setBodypart={setBodypart}
                  />
                ) : (
                  <ExerciseCart exercise={item} />
                )}
              </div>
            );
          })}
        </ScrollMenu>
      </VisibilityContext.Provider>
    </div>
  );
};

export default HorizontalScrollbar;
