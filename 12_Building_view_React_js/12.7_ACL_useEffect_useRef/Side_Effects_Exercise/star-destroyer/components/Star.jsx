import { useEffect, useRef } from "react";
import "./Star.css";

const Star = ({ id, position, destroyStar }) => {
  const starRef = useRef(null);

  useEffect(() => {
    starRef.current.focus();
  }, []);

  return (
    <div
      ref={starRef}
      tabIndex="0"
      onClick={() => destroyStar(id)}
      className="star"
      style={{ left: position.x, top: position.y }}
    >
      &#9733;
    </div>
  );
};

export default Star;
