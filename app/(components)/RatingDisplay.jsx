import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RatingDisplay = () => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
    </div>
  );
};

export default RatingDisplay;
