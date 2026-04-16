import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ value, onChange, noOfStars = 5 }) {
  //   const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //   function handleClick(getCurrentIndex) {
  //     setRating(getCurrentIndex);
  //   }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || value) ? "active" : "inactive"}
            onClick={() => onChange(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
      <p>{`(${value}/${noOfStars})`}</p>
    </div>
  );
}
