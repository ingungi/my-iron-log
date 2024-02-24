import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
//import ExerciseForm from "./ExerciseForm";

const AddExerciseBlock = ({ onAddExercise }) => {
  const [exercise, setExercise] = useState({ name: "", reps: 0, sets: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercise((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExercise(exercise);
    setExercise({ name: "", reps: 0, sets: 0 }); // Reset form
  };
  return (
    /*
    <div>
      Add Exercises
      <Link href="/ExercisePage/workoutId=${workoutId}">
        <FontAwesomeIcon
          icon={faPlus}
          className="text-white-400 hover:cursor-pointer hover:text-black-200"
        />
      </Link>
    </div>
    */
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        name="name"
        value={exercise.name}
        onChange={handleChange}
        placeholder="Exercise Name"
        required
      />
      <input
        type="number"
        name="reps"
        value={exercise.reps}
        onChange={handleChange}
        placeholder="Reps"
        required
      />
      <input
        type="number"
        name="sets"
        value={exercise.sets}
        onChange={handleChange}
        placeholder="Sets"
        required
      />
      <button type="submit" className="btn">
        Add Exercise
      </button>
    </form>
  );
};

export default AddExerciseBlock;
