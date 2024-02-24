import WorkoutForm from "@/app/(components)/WorkoutForm";

const getWorkoutByID = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Workouts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get workout.");
  }
  return res.json();
};
const WorkoutPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  //console.log("EDITMODE from page is: ", EDITMODE);
  //console.log("The ID from Page is: ", params.id);
  let updateWorkoutData = {};

  if (EDITMODE) {
    updateWorkoutData = await getWorkoutByID(params.id);
    //console.log();
    updateWorkoutData = updateWorkoutData.foundWorkout;
  } else {
    updateWorkoutData = { _id: "new" };
  }
  return <WorkoutForm workout={updateWorkoutData} />;
};

export default WorkoutPage;
