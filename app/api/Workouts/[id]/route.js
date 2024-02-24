import Workout from "@/app/(models)/Workout";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  console.log("RUNNING GET");
  await dbConnect();
  try {
    const { id } = params;
    //console.log(id);
    const foundWorkout = await Workout.findOne({ _id: id });
    return NextResponse.json({ foundWorkout }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await dbConnect();
  try {
    console.log("RUNNING DELETE");
    console.log(params);
    const { id } = params;
    console.log(id);
    await Workout.findByIdAndDelete(id);
    return NextResponse.json({ message: "Workout Deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await dbConnect();

  try {
    console.log("RUNNING PUT");
    const { id } = params;
    const body = await req.json();
    const workoutData = body.formData;

    const updateWorkoutData = await Workout.findByIdAndUpdate(id, {
      ...workoutData,
    });
    console.log(id);
    console.log(updateWorkoutData);

    return NextResponse.json({ message: "Workout Updated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
