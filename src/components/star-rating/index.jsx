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

  function handleMouseMove(event, index) {
    const { offsetX } = event.nativeEvent;
    const target = event.currentTarget;

    const percent = offsetX / target.offsetWidth;

    const newValue = percent < 0.5 ? index - 0.5 : index;
    setHover(newValue);
  }
  //   useEffect(() => handleMouseMove, []);

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const startValue = index + 1;
        return (
          <FaStar
            key={index}
            className={startValue <= (hover || value) ? "active" : "inactive"}
            onClick={() => onChange(hover || startValue)}
            onMouseEnter={() => handleMouseEnter(startValue)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(e, startValue)}
            size={40}
          />
        );
      })}
      <p>{`(${value}/${noOfStars})`}</p>
    </div>
  );
}
