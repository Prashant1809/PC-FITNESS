import React, { useContext } from "react";
import { Box , Typography } from "@mui/material";
import BodyPart from "./BodyPart";

import ExerciseCart from "./ExerciseCart";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

const HorizontalScrollbar = ({ data, bodyPart, setBodypart, bodyParts }) => {
  return (
    <div style={{ width: "100%", overflowX: "scroll" }}>
      <VisibilityContext.Provider>
        <ScrollMenu >  
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
