/*
import { connect } from "http2";
import mongoose, { Schema } from "mongoose";

mongoose, connect(process.env, MONGODB_URI);
mongoose.Promise = global.Promise;

const workoutExerciseSchema = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  PasswordHash: {
    type: String,
    required: true,
  },
  JoinDate: {
    type: Date,
    default: Date.now,
  },
  ProfilePictureURL: String,
  Age: Number,
  Gender: String,
  Height: Number,
  Weight: Number,
});

// Set model if it already exists. If not, create one
const WorkoutExercise =
  mongoose.models.WorkoutExercise ||
  mongoose.model("WorkoutExercise", workoutExerciseSchema);
export default WorkoutExercise;
*/
