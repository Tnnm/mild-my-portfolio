import React, { useRef } from "react";
import { motion } from "framer-motion";

import "./style.scss";

const Card = ({ header, className, children }) => {
  const elem = useRef(null);
  const dragOption = {
    drag: true,
    dragConstraints: {
      right: window.innerWidth - 300,
    },
    dragMomentum: false,
    dragTransition: { bounceStiffness: 600, bounceDamping: 10 },
  };
  const handleDrag = (e) => {
    console.log(e);
    elem.current.style.zIndex = +elem.current.style.zIndex + 10;
  };
  const computeHeader = header ? "" : "not-header";
  return (
    <motion.div
      className={"card-wrapper"}
      {...dragOption}
      ref={elem}
      onDragStart={handleDrag}
      onClick={handleDrag}
    >
      {header && (
        <div className="card-header">
          <h1 className="header">{header}</h1>
        </div>
      )}
      <div className={`card-body ${computeHeader}`}>{children}</div>
    </motion.div>
  );
};

export default Card;
