import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { FetchData, exerciseOptions, youtubeOptions } from "../utils/FetchData";

import Details from "../components/Details";
import SimiliarExercises from "../components/SimiliarExercises";
import ExerciseVideos from "../components/ExercisesVideos";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBurl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await FetchData(
        `${exerciseDBurl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      // console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);

      // api call for youtube video suggestion
      const exerciseVideosData = await FetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      // console.log(exerciseVideosData);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExerciseData = await FetchData(
        `${exerciseDBurl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExerciseData);
      const equipmentExerciseData = await FetchData(
        `${exerciseDBurl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExerciseData);
    };

    fetchExercisesData();
  }, [id]);
  // console.log(exerciseVideos)
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimiliarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
