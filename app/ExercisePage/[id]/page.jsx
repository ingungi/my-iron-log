import ExerciseForm from "@/app/(components)/ExerciseForm";
import React from "react";

const getExerciseByID = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Exercises/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get workout.");
  }
  return res.json();
};
const ExercisePage = ({ params }) => {
  const EDITMODE = params.id == "new" ? false : true;
  let updateExerciseData = {};

  return <ExerciseForm />;
};

export default ExercisePage;
