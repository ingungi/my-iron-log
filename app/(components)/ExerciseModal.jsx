// ExerciseModal.js
import React, { useState } from "react";

const ExerciseModal = ({ isOpen, onClose, onAddExercise, exercise }) => {
  //const EDITMODE = exercise.id === "new" ? false : true;
  const startingExerciseData = {
    name: "",
    equipment: "",
    sets: 0,
    reps: 0,
    weight: 0,
    notes: "",
  };

  const [exerciseData, setExercise] = useState(startingExerciseData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExercise((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    onAddExercise(exerciseData);
    setExercise({
      name: "",
      equipment: "",
      sets: 0,
      reps: 0,
      weight: 0,
      notes: "",
    }); // Reset form after submission
    onClose(); // Close modal after adding
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={onClose}>Close</button>
        <div className="flex flex-col gap-3 w-1/2">
          <h3>Enter Exercise Details</h3>

          <label>Name</label>
          <input
            id="name"
            name="name"
            value={exerciseData.name}
            onChange={handleChange}
            required={true}
          />

          <label>Equipment</label>
          <input
            id="equipment"
            name="equipment"
            value={exerciseData.equipment}
            onChange={handleChange}
          />

          <label>Sets</label>
          <input
            id="sets"
            name="sets"
            type="number"
            min="0"
            value={exerciseData.sets}
            onChange={handleChange}
            required={true}
          />

          <label>Reps</label>
          <input
            id="reps"
            name="reps"
            type="number"
            min="0"
            value={exerciseData.reps}
            onChange={handleChange}
            required={true}
          />

          <label>Weight</label>
          <input
            id="weight"
            name="weight"
            type="number"
            value={exerciseData.weight}
            onChange={handleChange}
          />

          <label>Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={exerciseData.notes}
            onChange={handleChange}
            rows="3"
          />

          <button onClick={handleAddClick} className="btn">
            Create Exercise
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseModal;
