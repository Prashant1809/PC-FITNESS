import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../components/HeroBanner";
import SeachesExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import { useState } from "react";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodypart] = useState("all");
  // console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SeachesExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodypart={setBodypart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
