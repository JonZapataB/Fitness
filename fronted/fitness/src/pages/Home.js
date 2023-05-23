import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExerxises from "../components/SearchExercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExerxises />
      <Exercises />
    </Box>
  );
};

export default Home;
