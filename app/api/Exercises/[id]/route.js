import Exercise from "@/app/(models)/Exercise";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
export async function DELETE(req, { params }) {
  console.log("RUNNING DELETE");
  await dbConnect();
  try {
    const { id } = params;
    console.log(id);
    await Exercise.findByIdAndDelete(id);
    return NextResponse.json({ message: "Exercise Deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
