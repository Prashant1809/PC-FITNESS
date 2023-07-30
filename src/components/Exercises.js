import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";

import Pagination from "@mui/material/Pagination";
import { FetchData, exerciseOptions } from "../utils/FetchData";
import ExerciseCart from "./ExerciseCart";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // console.log(exercises);

  // hz scrollbar  ke body part ke data ko show krnw kw liye useeffect
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await FetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await FetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const IndexOfLastExercise = currentPage * exercisePerPage;

  const IndexOfFirstExercise = IndexOfLastExercise - exercisePerPage;
  // console.log(exercises);
  const currentExercise = exercises.slice(
    IndexOfFirstExercise,
    IndexOfLastExercise
  );

  const Paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, index) => (
          <ExerciseCart key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultpage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={Paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
