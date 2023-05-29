import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import { useEffect } from "react";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("exercises", exercises);
  }, [exercises]);

  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        search={search}
        setSearch={setSearch}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      {exercises.length !== 0 && (
        <Exercises
          setExercises={setExercises}
          exercises={exercises}
          bodyPart={bodyPart}
        />
      )}
    </Box>
  );
};

export default Home;
