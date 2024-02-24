import dbConnect from "@/utils/dbConnect";
import Workout from "../../(models)/Workout";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("RUNNING POST");
  await dbConnect();
  try {
    const body = await req.json();
    //console.log("body");
    const workoutData = body.formData;
    //console.log(workoutData);
    await Workout.create(workoutData);

    return NextResponse.json({ message: "Workout Created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  console.log("RUNNING GET");
  await dbConnect();
  try {
    const workouts = await Workout.find();
    return NextResponse.json({ workouts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
