import dbConnect from "@/utils/dbConnect";
import Exercise from "../../(models)/Exercise";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("RUNNING POST");
  await dbConnect();
  try {
    const body = await req.json();
    const exerciseData = body.formData;
    await Exercise.create(exerciseData);

    return NextResponse.json({ message: "Workout Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
