"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ExerciseForm = () => {
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const staringExerciseData = {
    name: "",
    equipment: "",
    sets: 0,
    reps: 0,
    weight: 0, // Use null or 0 if you want to indicate no weight or the field is optional
    notes: "",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/Workouts/", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Failed to create Workout");
    }

    router.refresh();
    router.push("/");
    //console.log("submitted successfully");
  };

  const [formData, setFormData] = useState(staringExerciseData);
  return (
    <div className="flex justify-center ">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Enter Exercise Details</h3>

        <label>Name</label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          required={true}
          value={formData.name}
        />

        <label>Equipment</label>
        <input
          id="equipment"
          name="equipment"
          onChange={handleChange}
          value={formData.equipment}
        />

        <label>Sets</label>
        <input
          id="sets"
          name="sets"
          type="number"
          min="0"
          onChange={handleChange}
          required={true}
          value={formData.sets}
        />

        <label>Reps</label>
        <input
          id="reps"
          name="reps"
          type="number"
          min="0"
          onChange={handleChange}
          required={true}
          value={formData.reps}
        />

        <label>Weight</label>
        <input
          id="weight"
          name="weight"
          type="number"
          onChange={handleChange}
          value={formData.weight}
        />

        <label>Notes</label>
        <textarea
          id="notes"
          name="notes"
          onChange={handleChange}
          value={formData.notes}
          rows="3"
        />

        <input type="submit" className="btn" value="Create Exercise" />
      </form>
    </div>
  );
};

export default ExerciseForm;
