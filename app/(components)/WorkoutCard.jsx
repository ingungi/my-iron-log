"use client";
import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import AddExerciseBlock from "./AddExerciseBlock";
import DeleteBlock from "./DeleteBlock";
import EditBlock from "./EditBlock";
import Link from "next/link";

const WorkoutCard = ({ workout }) => {
  return (
    <div className="bg-card2 p-4 m-2 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-2">{workout.title}</h2>
        <div className="flex items-center space-x-2">
          <Link
            href={`/WorkoutPage/${workout._id}`}
            style={{ display: "contents" }}
          >
            <EditBlock />
          </Link>
          <DeleteBlock id={workout._id} />
        </div>
      </div>

      <p>
        <strong>Description:</strong> {workout.description}
      </p>
      <p>
        <strong>Type:</strong> {workout.type}
      </p>
      <p>
        <strong>Duration:</strong> {workout.duration} minutes
      </p>
      {workout.notes && (
        <p>
          <strong>Notes:</strong> {workout.notes}
        </p>
      )}
      <hr className="my-4" />
      {workout.exercises.length > 0 && (
        <>
          <h4 className="font-bold text-lg mb-2">Exercises:</h4>
          <div className="flex flex-col">
            {workout.exercises.map((exercise, index) => (
              <ExerciseCard
                key={index} // Ideally, use a unique identifier if available
                {...exercise}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WorkoutCard;
