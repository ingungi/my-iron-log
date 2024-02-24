import React from "react";
import Link from "next/link";
import DeleteExerciseBlock from "./DeleteExerciseBlock";

const ExerciseCard = ({
  name,
  equipment,
  sets,
  reps,
  weight,
  notes,
  onDelete,
  index,
}) => {
  return (
    <div className="bg-card hover:bg-card-hover rounded-md shadow-md p-3 my-2">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">{name}</h3>
        <DeleteExerciseBlock onDelete={() => onDelete(index)} />
      </div>
      <hr className="my-2" />
      {equipment && (
        <p>
          <strong>Equipment:</strong> {equipment}
        </p>
      )}
      <p>
        <strong>Sets:</strong> {sets}
      </p>
      <p>
        <strong>Reps:</strong> {reps}
      </p>
      {weight && (
        <p>
          <strong>Weight:</strong> {weight}lbs
        </p>
      )}{" "}
      {/* Assuming weight is in kilograms */}
      {notes && (
        <p>
          <strong>Notes:</strong> {notes}
        </p>
      )}
      {/* RatingDisplay can be included here if needed */}
    </div>
  );
};

export default ExerciseCard;
