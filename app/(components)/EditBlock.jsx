"use client";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const EditBlock = () => {
  return (
    <FontAwesomeIcon
      icon={faPenToSquare}
      className="text-green-400 hover:cursor-pointer hover:text-green-200"
    />
  );
};

export default EditBlock;
