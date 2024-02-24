// DeleteExerciseBlock.js
"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteExerciseBlock = ({ onDelete }) => {
  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={onDelete} // Attach the onClick handler here
    />
  );
};

export default DeleteExerciseBlock;
