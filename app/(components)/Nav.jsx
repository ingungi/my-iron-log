import {
  faCalendar,
  faChevronCircleLeft,
  faChevronRight,
  faDumbbell,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/WorkoutPage/new">
          <FontAwesomeIcon icon={faDumbbell} className="icon" />
        </Link>

        <FontAwesomeIcon icon={faCalendar} className="icon" />
        <span className="text-default-text">January 30th 2024</span>
        <Link href="">
          <FontAwesomeIcon icon={faChevronCircleLeft} className="icon" />
        </Link>
        <Link href="">
          <FontAwesomeIcon icon={faChevronRight} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">fakeemail@emails.com</p>
      </div>
    </nav>
  );
};

export default Nav;
