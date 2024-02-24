"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AddExerciseBlock from "./AddExerciseBlock";
import ExerciseModal from "./ExerciseModal";
import ExerciseCard from "./ExerciseCard";

const WorkoutForm = ({ workout }) => {
  const EDITMODE = workout._id === "new" ? false : true;
  const router = useRouter();
  //console.log("Edit mode is ", EDITMODE);
  //console.log("Workout ID: ", workout._id);

  const startingWorkoutData = {
    title: "",
    description: "",
    type: "",
    notes: "",
    duration: 0,
    exercises: [],
  };

  if (EDITMODE) {
    startingWorkoutData["title"] = workout.title;
    startingWorkoutData["description"] = workout.description;
    startingWorkoutData["type"] = workout.type;
    startingWorkoutData["duration"] = workout.duration;
    startingWorkoutData["exercises"] = workout.exercises;
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddExercise = (exercise) => {
    setFormData((prevState) => ({
      ...prevState,
      exercises: [...(prevState.exercises || []), exercise],
    }));
  };

  const handleDeleteExercise = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      exercises: prevState.exercises.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      console.log("IT'S ALL GOOD MA BOY (EDITMODE)");
      const res = await fetch(`/api/Workouts/${workout._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to update Workout");
      }
    } else {
      console.log("IT'S ALL GOOD MA BOY (NOT EDITMODE)");
      const res = await fetch("/api/Workouts", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to create Workout");
      }
    }

    router.refresh();
    router.push("/");
    //console.log("submitted successfully");
  };

  const [formData, setFormData] = useState(startingWorkoutData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div className="flex justify-center ">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Edit your Workout" : "Enter your Workout"}</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <input
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label>Type</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="">Choose One</option>
          <option value="strength">Strength</option>
          <option value="cardio">Cardio</option>
          <option value="hiit">HIIT</option>
          <option value="mobility">Mobility</option>
        </select>

        <label>Duration (minutes)</label>
        <input
          id="duration"
          name="duration"
          type="number"
          onChange={handleChange}
          required={true}
          value={formData.duration}
        />
        <label>Exercises</label>

        <button type="button" onClick={toggleModal}>
          Add Exercise
        </button>
        <ExerciseModal
          isOpen={isModalOpen}
          onClose={toggleModal}
          onAddExercise={handleAddExercise}
        />

        {/* List of exercises */}
        <div className="flex overflow-x-auto space-x-4 py-2">
          {formData.exercises &&
            formData.exercises.map((exercise, index) => (
              <ExerciseCard
                key={exercise.id || index}
                name={exercise.name}
                equipment={exercise.equipment}
                sets={exercise.sets}
                reps={exercise.reps}
                weight={exercise.weight}
                notes={exercise.notes}
                onDelete={() => handleDeleteExercise(index)}
              />
            ))}
        </div>
        <input
          type="submit"
          className="btn"
          value={EDITMODE ? "Update Workout" : "Create Workout"}
        />
      </form>
    </div>
  );
};

export default WorkoutForm;
