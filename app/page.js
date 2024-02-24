"use client";
import React, { useState, useEffect } from "react";
//import ExerciseCard from "./(components)/ExerciseCard";
import WorkoutCard from "./(components)/WorkoutCard";

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);

  // Define getWorkouts inside useEffect or as a standalone async function outside of the component
  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/Workouts", {
          cache: "no-store",
        });
        const data = await res.json();
        setWorkouts(data.workouts || []); // Assuming the response has a "workouts" field
      } catch (error) {
        console.log("Failed to get workouts", error);
      }
    };

    getWorkouts();
  }, []); // Empty dependency array means this effect runs once on mount

  const uniqueTypes = [...new Set(workouts.map(({ type }) => type))];

  return (
    <div className="p-5">
      <div>
        {uniqueTypes.map((uniqueType, typeIndex) => (
          <div key={typeIndex} className="mb-4">
            <h2>{uniqueType}</h2>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              {workouts
                .filter((workout) => workout.type === uniqueType)
                .map((filteredWorkout, index) => (
                  <WorkoutCard key={index} workout={filteredWorkout} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
