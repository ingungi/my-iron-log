//import { connect } from "http2";
import mongoose, { Schema } from "mongoose";

//mongoose, connect(process.env, MONGODB_URI);
//mongoose.Promise = global.Promise;

const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    equipment: {
      type: String, // Could also be an array if multiple equipments are needed
      required: false, // Assuming not all exercises require equipment
    },
    sets: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: false, // Assuming some exercises might not use weights
    },
    notes: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// Set model if it already exists. If not, create one
const Exercise =
  mongoose.models.Exercise || mongoose.model("Exercise", exerciseSchema);
export default Exercise;
